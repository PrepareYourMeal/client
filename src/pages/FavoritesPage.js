import React, { Component } from "react";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";
import "../assets/dashboard.css";
import NavBar from "../components/Navbar";
import PrivateRecipeGridViewer from "../components/PrivateRecipeGridViewer";
import { fetchRecipes } from "../redux/actions";
import { hideLoader, showLoader } from "../redux/actions/LoaderData";
import { getUser, removeRecipeFromFavourtites } from "../services";
import AddToPlannerModal from "../containers/AddToPlannerModal";
import { deepClone } from "../helper-methods";

class FavoritesPage extends Component {
  state = {
    recipes: [],
    plannerModal: {
      isVisible: false,
      selectedRecipe: null
    }
  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    this.props.showLoader("Loading your recipes!");
    await this._loadRecipes();
    this.props.hideLoader();
  }

  _loadRecipes = () => {
    return new Promise(async (resolve, reject) => {
      const recipes = await this._getFavouriteRecipes();
      if (recipes && recipes.length) {
        const formattedRecipes = this._formatRecipes(recipes);
        this.setState({ recipes: formattedRecipes }, async () => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  };

  _formatRecipes = (recipes) => {
    return recipes.map((recipe) => {
      return {
        ...recipe,
        name: recipe.title || "",
        recipeLink: "/auth/recipe?id=" + recipe._id,
        imageLink: recipe.imageUrl,
        time: recipe.readyInMinutes ? recipe.readyInMinutes + " mins" : "",
      };
    });
  };

  _getFavouriteRecipes = async () => {
    let favouriteRecipes = [];
    try {
      const userResponse = await getUser();
      if (
        userResponse &&
        userResponse.user &&
        userResponse.user.favourites &&
        userResponse.user.favourites.length
      ) {
        favouriteRecipes = userResponse.user.favourites.map((recipe) => {
          return {
            ...recipe,
            isFavourite: true,
          };
        });
      }
    } catch (error) {}
    return favouriteRecipes;
  };

  _removeFromFavourites = async (recipe) => {
    this.props.showLoader("Removing from favourites");
    await removeRecipeFromFavourtites(recipe._id);
    await this._loadRecipes();
    this.props.hideLoader();
  };

  _addToPlanner = recipeId => {
    const { plannerModal } = deepClone(this.state);
    plannerModal.isVisible = true;
    plannerModal.selectedRecipe = recipeId;
    this.setState({ plannerModal });
  }

  _dismissPlanerModal = () => {
    const { plannerModal } = deepClone(this.state);
    plannerModal.isVisible = false;
    plannerModal.selectedRecipe = null;
    this.setState({ plannerModal });
  }

  render() {
    const { recipes, plannerModal } = this.state;

    return (
      <React.Fragment>
        <NavBar {...this.props} />
        <div className="private-header">
            <h1>Your Faves!</h1>
        </div>
        <PrivateRecipeGridViewer
          recipes={recipes}
          listPageView={8}
          removeFromFavourites={this._removeFromFavourites}
          addToPlanner={this._addToPlanner}
        />
        <AddToPlannerModal 
          recipe={plannerModal.selectedRecipe}
          isVisible={plannerModal.isVisible}
          dismissModal={this._dismissPlanerModal}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipesData: state.recipesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoader: (text) => dispatch(showLoader(text)),
    hideLoader: () => dispatch(hideLoader()),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
