import React, { Component } from "react";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";
import "../assets/dashboard.css";
import NavBar from "../components/Navbar2";
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
            <h1>Your Favorites</h1>
                    <div className="headerButton">
                        <span className="headIcon">

                        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="heart" width="3em" height="2.5em" fill="red" aria-hidden="true"><path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path></svg>
                                                </span>
                    </div>            
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
