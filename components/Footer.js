import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        {}
        <div className="container">
          <div className="five columns">
            {}
            <h3 className="headline footer">About</h3>
            <span className="line" />
            <div className="clearfix" />
            <p>
              Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida
              est fermentum vulputate. Pellentesque et ipsum in dui malesuada
              tempus.
            </p>
          </div>
          <div className="three columns">
            {}
            <h3 className="headline footer">Archives</h3>
            <span className="line" />
            <div className="clearfix" />
            <ul className="footer-links">
              <li>
                <a href="#">June 2014</a>
              </li>
              <li>
                <a href="#">July 2014</a>
              </li>
              <li>
                <a href="#">August 2014</a>
              </li>
              <li>
                <a href="#">September 2014</a>
              </li>
              <li>
                <a href="#">November 2014</a>
              </li>
            </ul>
          </div>
          <div className="three columns">
            {}
            <h3 className="headline footer">Recipes</h3>
            <span className="line" />
            <div className="clearfix" />
            <ul className="footer-links">
              <li>
                <a href="browse-recipes.html">Browse Recipes</a>
              </li>
              <li>
                <a href="recipe-page-1.html">Recipe Page</a>
              </li>
              <li>
                <a href="submit-recipe.html">Submit Recipe</a>
              </li>
            </ul>
          </div>
          <div className="five columns">
            {}
            <h3 className="headline footer">Newsletter</h3>
            <span className="line" />
            <div className="clearfix" />
            <p>
              Sign up to receive email updates on new product announcements,
              gift ideas, sales and more.
            </p>
            <form action="#" method="get">
              <input
                className="newsletter"
                type="text"
                placeholder="mail@example.com"
                defaultValue
              />
              <button className="newsletter-btn" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {}
      </div>
    );
  }
}

export default Footer;
