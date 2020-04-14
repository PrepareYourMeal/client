import React, { Component } from "react";
import BrowseRecipePageScripts from "../library-scripts/browse-recipe-page-scripts";
import { Link } from "react-router-dom";
import SimpleSearch from "../components/simple-search";
import AdvancedSearch from "../components/advance-search";
import RecipesGridViewer from "../components/recipes-grid-viewer";
import { fetchRecipesFromServer } from "../redux/actions/recipes-data";
import { showLoader, hideLoader } from "../redux/actions/loader-data";
import { connect } from "react-redux";
import { sleepTime, deepClone } from "../helper-methods";

class BrowseRecipePage extends Component {
  state = {
    //manually set these options...we can pull from database but these are common?
    categoryOptions: [],
    ingredientsOptions: [],
    alergenOptions: [
      {
        label: "Peanut",
        key: "Peanut"
      },
      {
        label: "Tree",
        key: "Tree"
      },
      {
        label: "Milk",
        key: "Milk"
      },
      {
        label: "Egg",
        key: "Egg"
      },
      {
        label: "Wheat",
        key: "Wheat"
      },
      {
        label: "Soy",
        key: "Soy"
      }
    ],
    levelOptions: [
      {
        label: "All",
        key: "All"
      },
      {
        label: "Easy",
        key: "Easy"
      },
      {
        label: "Medium",
        key: "Medium"
      },
      {
        label: "Hard",
        key: "Hard"
      },
      {
        label: "Master",
        key: "Master"
      }
    ],
    servingOptions: [
      {
        label: "All",
        key: "All"
      },
      {
        label: "for 1 person",
        key: "for 1 person"
      },
      {
        label: "for 2 people",
        key: "for 2 people"
      },
      {
        label: "for 4 people",
        key: "for 4 people"
      },
      {
        label: "for family",
        key: "for family"
      }
    ],
    timingOptions: [
      {
        label: "All",
        key: "All"
      },
      {
        label: "Half an hour",
        key: "Half an hour"
      },
      {
        label: "Less than hour",
        key: "Less than hour"
      },
      {
        label: "More than hour",
        key: "More than hour"
      }
    ],
    recipes: [],
    filteredRecipes: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this._loadRecipes();
  }

  _loadRecipes = () => {
    return new Promise(async (resolve, reject) => {
      this.props.showLoader("Loading your recipes!");
      await this.props.fetchRecipesFromServer();
      const recipes = this.props.recipesData;
      if (recipes && recipes.length) {
        const formattedRecipes = this._formatRecipes(recipes);
        this.setState({ recipes: formattedRecipes }, async () => {
          const categoryOptions = this._generateCategories(recipes);
          const ingredientsOptions = this._generateIngredients(recipes);
          const filteredRecipes = await this._filterResults();
          this.setState(
            { filteredRecipes, categoryOptions, ingredientsOptions },
            async () => {
              BrowseRecipePageScripts.runLibraryScripts();
              await sleepTime(100);
              this.props.hideLoader();
            }
          );
        });
      }
    });
  };

  _formatRecipes = recipes => {
    return recipes.map(recipe => {
      return {
        ...recipe,
        name: recipe.title || "",
        recipeLink: "/recipe?id=" + recipe._id,
        imageLink: recipe.imageUrl,
        time: recipe.readyInMinutes ? recipe.readyInMinutes + " mins" : ""
      };
    });
  };

  //generate cat
  _generateCategories = recipes => {
    const categoryOptionsObject = {};
    for (
      let recipeIndex = 0; //loop through
      recipeIndex < (recipes || []).length;
      recipeIndex++ 
    ) {
      const recipe = recipes[recipeIndex];
      for (
        let categoryIndex = 0;
        categoryIndex < (recipe.tags || []).length;
        categoryIndex++
      ) {
        const categoryName = recipe.tags[categoryIndex];
        categoryOptionsObject[categoryName] = true;
      }
    }
    return Object.keys(categoryOptionsObject).map(categoryName => {
      return {
        label: categoryName,
        key: categoryName
      };
    });
  };

  _generateIngredients = recipes => {
    const ingredientsOptionsObject = {};
    for (
      let recipeIndex = 0;
      recipeIndex < (recipes || []).length;
      recipeIndex++
    ) {
      const recipe = recipes[recipeIndex];
      for (
        let ingredientIndex = 0;
        ingredientIndex < (recipe.ingredients || []).length;
        ingredientIndex++
      ) {
        const ingredientName = recipe.ingredients[ingredientIndex].name;
        ingredientsOptionsObject[ingredientName] = {
          ...recipe.ingredients[ingredientIndex],
          label: ingredientName,
          key: ingredientName
        };
      }
    }
    return Object.values(ingredientsOptionsObject);
  };

  _onSimpleSearchTrigger = async searchedParams => {
    // Use params to proceed with search
    const filteredRecipes = await this._filterResults(searchedParams);
    this.setState({ filteredRecipes }, () => {
      BrowseRecipePageScripts.runLibraryScripts();
    });
  };

  _onAdvancedSearchTrigger = searchedParams => {
    // Use params to proceed with search
  };

  _filterResults = (searchedParams = null) => {
    return new Promise((resolve, reject) => {
      const { recipes } = deepClone(this.state);
      let filteredRecipes = recipes;
      if (searchedParams) {
        // Filter 1: By Category
        if (
          searchedParams.selectedCategory &&
          searchedParams.selectedCategory.length &&
          searchedParams.selectedCategory !== "all"
        ) {
          filteredRecipes = filteredRecipes.filter(recipe => {
            if (recipe.tags.indexOf(searchedParams.selectedCategory) > -1) {
              return true;
            } else {
              return false;
            }
          });
        }
        // Filter 2: By ingredients
        if (
          searchedParams.selectedIngredients &&
          searchedParams.selectedIngredients.length
        ) {
          filteredRecipes = filteredRecipes.filter(recipe => {
            const recipeIngredients = recipe.ingredients.map(
              ingredient => ingredient.name
            );
            // Check if it is OR matching or AND matching
            if (
              searchedParams.recipeNeedsToHave &&
              searchedParams.recipeNeedsToHave === "OR"
            ) {
              // Need to have any one of the selected ingredients
              return recipeIngredients.some(
                ingredient =>
                  searchedParams.selectedIngredients.indexOf(ingredient) >= 0
              );
            } else {
              // Need to have all of the selected ingredients
              return searchedParams.selectedIngredients.every(
                ingredient => recipeIngredients.indexOf(ingredient) >= 0
              );
            }
          });
        }
        // Filter 3: By search text (in name)
        if (searchedParams.searchedText && searchedParams.searchedText.length) {
          filteredRecipes = filteredRecipes.filter(recipe => {
            if (
              recipe.title
                .toLowerCase()
                .indexOf(searchedParams.searchedText.toLowerCase()) > -1
            ) {
              return true;
            } else {
              return false;
            }
          });
        }
      }
      resolve(filteredRecipes);
    });
  };

  render() {
    const {
      categoryOptions,
      ingredientsOptions,
      alergenOptions,
      levelOptions,
      servingOptions,
      timingOptions,
      recipes,
      filteredRecipes
    } = this.state;
    return (
      <React.Fragment>
        <div>
          {/* Titlebar */}
          <section id="titlebar" className="browse-all">
            {/* Container */}
            <div className="container">
              <div className="eight columns">
                <h2>Browse Recipes</h2>
              </div>
            </div>
            {/* Container / End */}
          </section>
          {/* Container */}
          <div className="advanced-search-container">
            <div className="container">
              <div className="sixteen columns">
                <div id="advanced-search">
                  {categoryOptions.length && ingredientsOptions.length ? (
                    <SimpleSearch
                      categoryOptions={categoryOptions}
                      ingredientsOptions={ingredientsOptions}
                      onSearchTrigger={this._onSimpleSearchTrigger}
                    />
                  ) : null}

                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
          <div className="margin-top-35" />
          {/* Container */}
          <RecipesGridViewer recipes={filteredRecipes} listPageView={8} />
          {/* Wrapper / End */}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipesData: state.recipesData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showLoader: text => dispatch(showLoader(text)),
    hideLoader: () => dispatch(hideLoader()),
    fetchRecipesFromServer: () => dispatch(fetchRecipesFromServer())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseRecipePage);
