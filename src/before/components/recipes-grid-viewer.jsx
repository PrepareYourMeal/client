import React, { Component } from "react";
import { Link } from "react-router-dom";
import BrowseRecipePageScripts from "../library-scripts/browse-recipe-page-scripts";
import Pagination from './pagination';

class RecipesGridViewer extends Component {
  state = {
    currentIndex: 0
  };

  _updateCurrentIndex = currentIndex => {
    this.setState({ currentIndex }, () => {
      // BrowseRecipePageScripts.runLibraryScripts();
      setTimeout(() => {
        // BrowseRecipePageScripts.runLibraryScripts();
      }, 1000);
		});
  };

  componentDidMount() {
    // Initialize libabry scripts
    BrowseRecipePageScripts.runLibraryScripts();
  }

  render() {
    const { recipes = [], listPageView = 5, sectionHeading = "All Recipes" } = this.props;
    const { currentIndex } = this.state;
    let recipesInCurrentView = recipes;
    let isPaginationRequired = false;
    if (recipes.length && recipes.length > listPageView) {
      isPaginationRequired = true;
      const startingIndex = currentIndex * listPageView;
      let endingIndex = startingIndex + listPageView;
      if (endingIndex >= recipes.length) {
        endingIndex = recipes.length;
      }
      recipesInCurrentView = recipes.slice(startingIndex, endingIndex);
    }
    if (recipesInCurrentView.length) {
      return (
        <>
          <div className="container">
            {/* Headline */}
            <div className="sixteen columns">
              <h3 className="headline">{sectionHeading}</h3>
              <span className="line margin-bottom-35" />
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
            <div className="isotope">
              {recipesInCurrentView.map((recipe, recipeIndex) => (
                <div className="four isotope-box columns" key={recipeIndex}>
                  <div className="thumbnail-holder">
                    <Link to={recipe.recipeLink}>
                      <img src={recipe.imageLink} alt="" />
                      <div className="hover-cover" />
                      <div className="hover-icon">View Recipe</div>
                    </Link>
                  </div>
                  <div className="recipe-box-content">
                    <h3>
                      <Link to={recipe.recipeLink}>{recipe.name}</Link>
                    </h3>
                    <div className="rating five-stars">
                      <div className="star-rating" />
                      <div className="star-bg" />
                    </div>
                    {recipe.time && recipe.time ? (
                      <div className="recipe-meta">
                        <i className="fa fa-clock-o" /> {recipe.time}
                      </div>
                    ) : null}
                    <div className="clearfix" />
                  </div>
                </div>
              ))}
            </div>
            <div className="clearfix" />
            {/* Pagination */}
            {isPaginationRequired ? (
            <Pagination
              currentIndex={currentIndex}
              listPageView={listPageView}
              total={recipes.length}
              onUpdate={index => this._updateCurrentIndex(index)}
            />
          ) : null}
          </div>
        </>
      );
    } else {
      return (
        <div className="container no-results-wrapper">
          <h3>No results found!</h3>
        </div>
      );
    }
  }
}

export default RecipesGridViewer;
