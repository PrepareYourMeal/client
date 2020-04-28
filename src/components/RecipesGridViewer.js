import React, { Component } from "react";
import { Link } from "react-router-dom";
import BrowseRecipePageScripts from "../library-scripts/BrowseRecipePageScript";
import Pagination from './Pagination';

class RecipeGridViewer extends Component {
  state = {
    currentIndex: 0
  };

  _updateCurrentIndex = currentIndex => {
    this.setState({ currentIndex }, () => {
      setTimeout(() => {
        // BrowseRecipePageScripts.runLibraryScripts();
      }, 1000);
		});
  };

  componentDidMount() {
    BrowseRecipePageScripts.runLibraryScripts();
  }

  render() {
    const { recipes = [], listPageView = 5, sectionHeading = "What's Cooking?" } = this.props;
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
                      <Link to={recipe.recipeLink}>{recipe.name.length < 20 ? '${recipe.name}' : `${recipe.name.substring(0, 25)}...`}</Link>
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
          <h3>No recipes found!</h3>
        </div>
      );
    }
  }
}

export default RecipeGridViewer;