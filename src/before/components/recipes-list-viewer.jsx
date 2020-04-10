import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

class RecipesListViewer extends Component {
  state = {
    currentIndex: 0
  };

  _updateCurrentIndex = currentIndex => {
    this.setState({ currentIndex });
  };

  render() {
    const { recipes = [], listPageView = 5 } = this.props;
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
    return (
      <div className="twelve columns ">
        {recipesInCurrentView.length ? (
          <>
            <h3 className="headline">Latest Recipes</h3>
            <span className="line rb margin-bottom-35" />
            <div className="clearfix" />
            {/* Isotope */}
            <div className="list-style">
              {recipesInCurrentView.map((recipe, recipeIndex) => (
                <div className="four recipe-box columns" key={recipeIndex}>
                  {/* Thumbnail */}
                  <div className="thumbnail-holder">
                    <Link to={recipe.recipeLink}>
                      <img src={recipe.imageLink} alt="" />
                      <div className="hover-cover" />
                      <div className="hover-icon">View Recipe</div>
                    </Link>
                  </div>
                  {/* Content */}
                  <div className="recipe-box-content">
                    <h3>
                      <Link to="/recipe">{recipe.name}</Link>
                    </h3>
                    <p>{recipe.summary}</p>
                    <div className="rating five-stars">
                      <div className="star-rating" />
                      <div className="star-bg" />
                    </div>
                    <div className="meta-alignment">
                      {recipe.author && recipe.author.length ? (
                        <div className="recipe-meta">
                          <i className="fa fa-user" /> by{" "}
                          <a href="/#" onClick={e => e.preventDefault()}>
                            {recipe.author}
                          </a>
                        </div>
                      ) : null}
                      {recipe.time && recipe.time.length ? (
                        <div className="recipe-meta">
                          <i className="fa fa-clock-o" /> {recipe.time}
                        </div>
                      ) : null}
                      {recipe.servings ? (
                        <div className="recipe-meta">
                          <i className="fa fa-cutlery" /> {recipe.servings}{" "}
                          servings
                        </div>
                      ) : null}
                    </div>
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
          </>
        ) : null}
      </div>
    );
  }
}

export default RecipesListViewer;
