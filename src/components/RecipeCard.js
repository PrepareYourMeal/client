import React, { Component } from "react";
import RecipePageScripts from "../library-scripts/recipe-scripts";
import AuthorInfo from "../components/AuthorInfoCard";
import PopularRecipies from "../components/PopularRecipes";
import RecipesGridViewer from "../components/RecipesGridViewer";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import SquareSocialButtons from "../components/SquareSocialButtons";
import IngredientsCheckList from "../components/IngredientsChecklist";
import RecipeDirectionsList from "../components/RecipesDirectionsList";

class RecipesGridViewer extends Component {
    state = {
      currentIndex: 0,
      currentRecipe: []
    };
    
    componentDidMount() {
        window.scrollTo(0, 0);
        RecipePageScripts.runLibraryScripts();
      }

      render() {
        const {
          author,
          popularRecipes,
          relatedRecipes,
          reviews,
          sidebarSocialLinks,
          ingredients,
          directions
        } = this.state;

        return (
            <React.Fragment>
              <div>
                <div className="recipeBackground">
                  <img src="assets/images/recipeBackground-02.jpg" alt />
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
                          <h2>Avocado Melon Salad With Lime Vinaigrette</h2>
                          <div className="rating four-stars">
                            <div className="star-rating" />
                            <div className="star-bg" />
                          </div>
                          <span>
                            <a href="#reviews">(2 reviews)</a>
                          </span>
                        </div>
                      </section>
                      {/* Slider */}
                      <div className="recipeSlider rsDefault">
                        <img
                          itemProp="image"
                          className="rsImg"
                          src="assets/images/recipePhoto-03.jpg"
                          alt
                        />
                      </div>
                      {/* Details */}
                      <section className="recipe-details" itemProp="nutrition">
                        <ul>
                          <li>
                            Serves: <strong itemProp="recipeYield">2 people</strong>
                          </li>
                          <li>
                            Prep Time: <strong itemProp="prepTime">15 min</strong>
                          </li>
                          <li>
                            Calories: <strong itemProp="calories">112 kcal</strong>
                          </li>
                        </ul>
                        <a href="#" className="print">
                          <i className="fa fa-print" /> Print
                        </a>
                        <div className="clearfix" />
                      </section>
                      {/* Text */}
                      <p itemProp="description">
                        This is a very basic beef stew. It’s easy, delicious and
                        inexpensive to make. While there are hundreds of variations of
                        this traditional recipe, it’s hard to improve on this
                        version’s savory and comforting goodness.
                      </p>
                      <div className="recipe-container">
                        <IngredientsCheckList ingredients={ingredients} />
                        <RecipeDirectionsList directions={directions} />
                      </div>
                      <div className="clearfix" />
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
                          <a href="#" className="google-plus-share">
                            Google Plus
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
                      <RecipesGridViewer
                        recipes={relatedRecipes}
                        sectionHeading="You May Also Like"
                      />
      
                      <div className="clearfix" />
                      <div className="margin-top-15" />
                      <Reviews reviews={reviews} />
                      <div className="clearfix" />
                      <br />
                      <AddReview />
                    </div>
                  </div>
                  <div className="four columns">
                    <div className="widget search-form">
                      <nav className="search">
                        <form action="#" method="get">
                          <button>
                            <i className="fa fa-search" />
                          </button>
                          <input
                            className="search-field"
                            type="text"
                            placeholder="Search for recipes"
                          />
                        </form>
                      </nav>
                      <div className="clearfix" />
                    </div>
                    <AuthorInfo
                      name={author.name}
                      profileImage={author.profileImage}
                      email={author.email}
                      introduction={author.introduction}
                    />
                    <PopularRecipies recipes={popularRecipes} />
                    <SquareSocialButtons links={sidebarSocialLinks} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }

}

export default RecipesGridViewer;  