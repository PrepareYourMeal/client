import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	state = {};
	
  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="three columns">
            <div id="logo">
              <h1>
                <a href="/#" onClick={e => e.preventDefault()}>
                  <img src="assets/images/Logo.png" alt="StoveOven" />
                </a>
              </h1>
            </div>
          </div>
          <div className="thirteen columns navigation">
            <nav
              id="navigation"
              className="menu nav-collapse"
              data-component="NavBar"
            >
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/recipes">Recipes</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/contact">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
