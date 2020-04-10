import React, { Component } from "react";
import { Link } from "react-router-dom";
import CarouselScripts from "../library-scripts/carousel-scripts";

class RecipeCarousel extends Component {
  state = {};

  componentDidMount() {
    // Initiate carousel library scripts
    CarouselScripts.runLibraryScripts();
  }

  render() {
    const { recipes = [] } = this.props;

    return (
      <div
        id="homeSlider"
        className="royalSlider rsDefaultInv"
        data-component="Slider"
      >
        {recipes.map((recipe, recipeIndex) => (
          <div className="rsContent" key={recipeIndex}>
            <a className="rsImg" href={recipe.image}>
              <i className="rsTmb">{recipe.title}</i>
            </a>
            {/* Slide Caption */}
            <div className="SlideTitleContainer rsABlock">
              <div className="CaptionAlignment">
                <h2 className="rsSlideTitle title">
                  <a href="recipe-page-1.html">{recipe.title}</a>
                </h2>
                <div className="rsSlideTitle details">
                  <ul>
                    {recipe.servings ? (
                      <li>
                        <i className="fa fa-cutlery" /> {recipe.servings}{" "}
                        Servings
                      </li>
                    ) : null}
                    {recipe.time && recipe.time.length ? (
                      <li>
                        <i className="fa fa-clock-o" /> {recipe.time}
                      </li>
                    ) : null}
                    {recipe.author && recipe.author.length ? (
                      <li>
                        <i className="fa fa-user" /> by{" "}
                        <a href="/#" onClick={e => e.preventDefault()}>
                          {recipe.author}
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </div>
                <Link to={recipe.recipeLink} className="rsSlideTitle button">
                  View Recipes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default RecipeCarousel;
