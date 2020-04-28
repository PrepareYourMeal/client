import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="footer" data-component="Footer">
          {/* Container */}
          <div className="container">
            <div className="five columns">
              {/* Headline */}
              <h3 className="headline footer">About</h3>
              <span className="line" />
              <div className="clearfix" />
              <p>
                Stove & Oven is a meal planner service supplying delicious recipes of hand-picked dishes by our professional chef team for familes of any size! 
              </p>
            </div>
            <div className="three columns">

              <h3 className="headline footer">Recipe Archives</h3>
              <span className="line" />
              <div className="clearfix" />
              <ul className="footer-links">
                <li>
                  <a href="/#" onClick={e => e.preventDefault()}>
                    June 2014
                  </a>
                </li>
                <li>
                  <a href="/#" onClick={e => e.preventDefault()}>
                    July 2014
                  </a>
                </li>
                <li>
                  <a href="/#" onClick={e => e.preventDefault()}>
                    August 2014
                  </a>
                </li>
                <li>
                  <a href="/#" onClick={e => e.preventDefault()}>
                    September 2014
                  </a>
                </li>
                <li>
                  <a href="/#" onClick={e => e.preventDefault()}>
                    November 2014
                  </a>
                </li>
              </ul>
            </div>
            <div className="three columns">
              <h3 className="headline footer">Recipes</h3>
              <span className="line" />
              <div className="clearfix" />
              <ul className="footer-links">
                <li>
                  <a href="/recipes">Browse Recipes</a>
                </li>
                <li>
                  <a href="submit-recipe.html">Submit Recipe</a>
                </li>
              </ul>
            </div>
            <div className="five columns">
              <h3 className="headline footer">Newsletter</h3>
              <span className="line" />
              <div className="clearfix" />
              <p>
                Sign up to receive email updates on new recipes ideas and more!
              </p>
              <form action="#" method="get">
                <input
                  className="newsletter"
                  type="text"
                  placeholder="hello@stoveandoven.com"
                />
                <button className="newsletter-btn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {/* Container / End */}
        </div>
        <div id="footer-bottom" data-component="BottomBar">
          {/* Container */}
          <div className="container">
            <div className="eight columns">
              © Copyright 2020 by{" "}
              <a href="/#" onClick={e => e.preventDefault()}>
                Stove & Oven
              </a>
              . All Rights Reserved.
            </div>
          </div>
          {/* Container / End */}
        </div>
        <div id="backtotop">
          <a href="/#" onClick={e => e.preventDefault()} />
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
