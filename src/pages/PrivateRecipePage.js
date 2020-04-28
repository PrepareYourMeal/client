import React, { Component } from "react";
import RecipePageScripts from "../library-scripts/RecipeScript";
import AuthorInfo from "../components/AuthorInfoCard";
import IngredientsCheckList from "../components/IngredientsChecklist";
import RecipeDirectionsList from "../components/RecipesDirectionsList";
import { extractQueryParams, sleepTime, deepClone } from "../helper-methods";
import { connect } from "react-redux";
import { fetchRecipes } from "../redux/actions/RecipesData";
import { hideLoader, showLoader } from "../redux/actions/LoaderData";
import NavBar from "../components/Navbar";

import axios from "axios";
import {
  getUser,
  removeRecipeFromFavourtites,
  addRecipeToFavourtites,
} from "../services";
import AddToPlannerModal from "../containers/AddToPlannerModal";

class PrivateRecipePage extends Component {
  state = {
    author: {
      name: <>Stove & Oven</>,
      profileImage: "assets/images/author-photo.png",
      email: "hello@stoveandoven.com",
      introduction: `We strive to find the best and most delicious recipes for you and your family!`,
    },

    sidebarSocialLinks: [
      {
        count: 1234,
        label: "Fans",
        wrapperClass: "facebook-share",
        buttonText: "Like",
        redirectTo: "https://www.facebook.com",
      },
      {
        count: 863,
        label: "Fans",
        wrapperClass: "twitter-share",
        buttonText: "Follow",
        redirectTo: "https://www.twitter.com",
      },
      {
        count: 902,
        label: "Fans",
        wrapperClass: "google-plus-share",
        buttonText: "Follow",
        redirectTo: "https://www.google.com",
      },
    ],
    socialButton: [
      {
        count: 1234,
        label: "Fans",
        wrapperClass: "facebook-share",
        buttonText: "Like",
        redirectTo: "https://www.facebook.com",
      },
      {
        count: 863,
        label: "Fans",
        wrapperClass: "twitter-share",
        buttonText: "Follow",
        redirectTo: "https://www.twitter.com",
      },
      {
        count: 902,
        label: "Fans",
        wrapperClass: "google-plus-share",
        buttonText: "Follow",
        redirectTo: "https://www.google.com",
      },
    ],

    directions: [
      `In a Dutch oven, heat oil over medium heat until hot,
      but not smoking. Pat the meat dry with paper towels and
      brown in batches, transferring the meat with a slotted
      spoon to a bowl as they are done.`,
      `In the fat remaining in the pot, cook the onions until
    softened, about 5 minutes.`,
      `Return meat to the pot with any juices in the bowl and
    add the tomatoes with juice, chiles, beer, beef broth,
    oregano, cumin, and Worcestershire sauce. Season with
    salt and pepper to taste.`,
      `Bring to a boil and reduce heat. Simmer, partially
    covered, for 2 1/2 hours or until meat is tender.`,
    ],
    ingredients: [
      {
        label: "cubed beef stew meat",
        quantity: "2 pounds",
      },
      {
        label: "vegetable oil",
        quantity: "3 tablespoons",
      },
      {
        label: "beef bouillon, crumbled",
        quantity: "4 cubes",
      },
      {
        label: "onion, chopped",
        quantity: "1 large",
      },
      {
        label: "dried rosemary",
        quantity: "1 teaspoon",
      },
      {
        label: "ground black pepper",
        quantity: "1/2 teaspoon",
      },
      {
        label: "potatoes, peeled and cubed",
        quantity: "3 large",
      },
      {
        label: "carrots cut into 1 inch pieces",
        quantity: "4",
      },
      {
        label: "stalks celery, cut into 1 inch pieces",
        quantity: "4",
      },
    ],
    recipe: null,
    searchText: "",
    isFavourite: false,
    plannerModal: {
      isVisible: false,
      selectedRecipe: null,
    },
  };

  async componentDidMount() {
    // Initialize libabry scripts
    await this._loadRecipe();
    RecipePageScripts.runLibraryScripts();
  }

  _loadRecipe = () => {
    return new Promise(async (resolve, reject) => {
      // Check if recipe id is available
      this.props.showLoader("Loading Recipe");
      const routeParams = extractQueryParams(this.props.location.search);
      if (routeParams.id && routeParams.id.length) {
        // Try to get data
        await this.props.fetchRecipes();
        const recipes = this.props.recipesData;
        const recipe = recipes.find((r) => r._id === routeParams.id);
        if (recipe) {
          await this._setRecipe(recipe);
          this.props.hideLoader();
          resolve();
        } else {
          // Recipe not found
          alert("Not a valid recipe, please browse from the list");
          // Redirect to browse page
          this.props.history.replace("/dashboard");
        }
      } else {
        // Recipe not found
        await sleepTime(1000);
        alert("Not a valid recipe, please browse from the list");
        // Redirect to browse page
        this.props.history.replace("/recipes");
      }
    });
  };

  _setRecipe = (recipe) => {
    return new Promise(async (resolve, reject) => {
      const directions = this._prepareInstructions(recipe.instructions);
      const ingredients = this._formatIngredients(recipe.ingredients);
      const isFavourite = await this._checkIfRecipeIsFavourite(recipe);
      this.setState(
        {
          recipe,
          directions,
          ingredients,
          isFavourite,
        },
        () => {
          window.scrollTo(0, 0);
          resolve();
        }
      );
    });
  };

  _checkIfRecipeIsFavourite = async (recipe) => {
    const userResponse = await getUser();
    if (
      userResponse &&
      userResponse.user &&
      userResponse.user.favourites &&
      userResponse.user.favourites.length
    ) {
      const favouriteRecipes = userResponse.user.favourites;
      if (
        favouriteRecipes.findIndex(
          (favouriteRecipe) => favouriteRecipe._id === recipe._id
        ) > -1
      ) {
        return true;
      }
    }
    return false;
  };

  _prepareInstructions = (instructions) => {
    let formattedInstructions = [];
    // Check if virtual indexing is present or not
    if (this._numericalValuesPresent(instructions)) {
      // Process normally
      let index = 0;
      instructions.forEach((instruction) => {
        if (!isNaN(instruction) && parseInt(instruction) === index + 1) {
          // Update index
          index++;
          formattedInstructions[index - 1] = "";
        } else {
          formattedInstructions[index - 1] += " " + instruction;
        }
      });
    } else {
      formattedInstructions = instructions.filter(
        (instruction) => instruction.length
      );
    }
    return formattedInstructions;
  };

  _formatIngredients = (ingredients) => {
    return ingredients.map((ingredient) => {
      const formattedIngredient = {
        label: ingredient.name,
      };
      if (ingredient.quantity) {
        formattedIngredient["quantity"] = ingredient.quantity + " ";
      }
      if (ingredient.unit) {
        formattedIngredient["quantity"] += ingredient.unit + " ";
      }
      return formattedIngredient;
    });
  };

  _numericalValuesPresent = (arrayToCheck) => {
    let count = 0;
    arrayToCheck.forEach((elem) => {
      if (!isNaN(elem) && elem !== "") {
        count++;
      }
    });
    if (count > 0) {
      return true;
    } else {
      return false;
    }
  };

  _updateSearchBox = (searchText) => {
    this.setState({ searchText });
  };

  _addFavorite(recipe) {
    let token = window.localStorage.getItem("accessJWT");
    const url = `/api/users/${token}/favourites`;
    const data = {
      recipe: recipe,
    };
    axios
      .put(url, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => console.log(r.status))
      .catch((e) => console.log(e));
  }

  _onSearch = (e) => {
    e.preventDefault();
    const { searchText } = this.state;
    if (searchText.length) {
      this.props.history.push("/recipes?searchText=" + searchText);
    }
  };

  _addToFavourites = async () => {
    const { recipe } = this.state;
    this.props.showLoader("Adding to favourites");
    await addRecipeToFavourtites(recipe._id);
    await this._loadRecipe();
    this.props.hideLoader();
  };

  _removeFromFavourites = async () => {
    const { recipe } = this.state;
    this.props.showLoader("Removing from favourites");
    await removeRecipeFromFavourtites(recipe._id);
    await this._loadRecipe();
    this.props.hideLoader();
  };

  _addToPlanner = () => {
    const { recipe } = this.state;
    const { plannerModal } = deepClone(this.state);
    plannerModal.isVisible = true;
    plannerModal.selectedRecipe = recipe;
    this.setState({ plannerModal });
  };

  _dismissPlanerModal = () => {
    const { plannerModal } = deepClone(this.state);
    plannerModal.isVisible = false;
    plannerModal.selectedRecipe = null;
    this.setState({ plannerModal });
  };

  render() {
    const {
      author,
      ingredients,
      directions,
      recipe,
      searchText,
      isFavourite,
      plannerModal,
    } = this.state;
    if (recipe) {
      return (
        <React.Fragment>
          <AddToPlannerModal
            recipe={plannerModal.selectedRecipe}
            isVisible={plannerModal.isVisible}
            dismissModal={this._dismissPlanerModal}
          />
          <NavBar {...this.props} />
          <div>
            <div className="recipeBackground">
              <img src="../../assets/images/carousel/Recipe-Page.jpg" alt />
            </div>
            <div
              className="container"
              itemScope
              itemType="http://schema.org/Recipe"
            >
              <div className="twelve columns">
                <div className="alignment">
                  <section className="recipe-header">
                    <div className="title-alignment">
                      <h2> {recipe.title}</h2>
                      <div className="rating four-stars">
                        <div className="star-rating" />
                        <div className="star-bg" />
                      </div>
                      <span>
                        <a href="#reviews">(2 reviews)</a>
                      </span>
                    </div>
                  </section>
                  <div className="recipeSlider rsDefault">
                    <img
                      itemProp="image"
                      className="rsImg"
                      src={recipe.imageUrl}
                      alt
                    />
                  </div>
                  <section className="recipe-details" itemProp="nutrition">
                    <ul>
                      <li>
                        Serves:
                        <strong itemProp="recipeYield">
                          {" "}
                          {recipe.servings}
                          people
                        </strong>
                      </li>
                      <li>
                        Prep Time:
                        <strong itemProp="prepTime">
                          {" "}
                          {recipe.readyInMinutes}
                          mins
                        </strong>
                      </li>
                      <li>
                        Cook Time:
                        <strong itemProp="cookTime">
                          {" "}
                          {recipe.preparationMinutes}
                          mins
                        </strong>
                      </li>
                      <li>
                        {isFavourite ? (
                          <a
                            class="add-to-fav"
                            data-post_id="62"
                            onClick={(e) => {
                              e.preventDefault();
                              this._removeFromFavourites();
                            }}
                          >
                            <i class="fa fa-heart"></i> Remove from Favorites
                          </a>
                        ) : (
                          <a
                            class="add-to-fav"
                            data-post_id="62"
                            onClick={(e) => {
                              e.preventDefault();
                              this._addToFavourites();
                            }}
                          >
                            <i class="fa fa-heart"></i> Add to Favorites
                          </a>
                        )}
                      </li>
                      <li>
                        <a
                          class="plannerbtn"
                          data-post_id="62"
                          onClick={(e) => {
                            e.preventDefault();
                            this._addToPlanner();
                          }}
                        >
                          <i class="fa fa-calendar"></i>
                        </a>
                      </li>
                    </ul>
                    <a onClick="window.print();" className="print">
                      <i className="fa fa-print" />
                      Print
                    </a>
                    <div className="clearfix" />
                  </section>
                  <div className="recipe-container">
                    <IngredientsCheckList ingredients={ingredients} />
                    <RecipeDirectionsList directions={directions} />
                  </div>
                  <div className="clearfix" /> {/* Share Post */}
                  <ul className="share-post">
                    <li>
                      <a href="#" className="facebook-share">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter-share">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pinterest-share">
                        Pinterest
                      </a>
                    </li>
                  </ul>
                  <div className="clearfix" />
                  <div className="margin-bottom-40" />
                  <div className="margin-top-15" />
                  <br />
                </div>
              </div>
              <div className="four columns">
                <div className="widget search-form">
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return { recipesData: state.recipesData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoader: (text) => dispatch(showLoader(text)),
    hideLoader: () => dispatch(hideLoader()),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRecipePage);
