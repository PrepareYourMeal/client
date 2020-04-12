import React, { Component } from 'react';

class Footer extends Component {
    state = {};

    render() {
        return (
            <>
                <div id="footer" data-component="Footer">
                    {/* Container */}
                    <div className="container">
                        <div className="five columns">
                            {/* Headline */}
                            <h3 className="headline footer">About</h3>
                            <span className="line" />
                            <div className="clearfix" />
                            <p>
                                Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida est fermentum
                                vulputate. Pellentesque et ipsum in dui malesuada tempus.
                            </p>
                        </div>
                        <div className="three columns">
                            {/* Headline */}
                            <h3 className="headline footer">Featured</h3>
                            <span className="line" />
                            <div className="clearfix" />
                            <ul className="footer-links">
                                <li>
                                    <a href="/#" onClick={e => e.preventDefault()}>
                                        June 2019
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" onClick={e => e.preventDefault()}>
                                        July 2019
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" onClick={e => e.preventDefault()}>
                                        August 2019
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" onClick={e => e.preventDefault()}>
                                        September 2019
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" onClick={e => e.preventDefault()}>
                                        November 2019
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="three columns">
                            {/* Headline */}
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
                            {/* Headline */}
                            <h3 className="headline footer">Newsletter</h3>
                            <span className="line" />
                            <div className="clearfix" />
                            <p>Sign up to receive email updates new recipes!</p>
                            <form action="#" method="get">
                                <input className="newsletter" type="text" placeholder="hello@stoveandoven.com" />
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
                            © Copyright 2020 by{' '}
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
            </>
        );
    }
}

export default Footer;
