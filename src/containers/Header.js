import React, {Component} from "react";
import {Link} from "react-router-dom";


class Header extends Component {
    state = {};

    render() {
        return (
            <header id="header">
                <div className="container">
                    <div className="three columns">
                        <div id="logo">
                            <h1>
                                <a href="/#"
                                    onClick={
                                        e => e.preventDefault()
                                }>
                                    <img src="assets/images/logo.png" alt="Stove & Oven"/>
                                </a>
                            </h1>
                        </div>
                    </div>
                    <div className="thirteen columns navigation">
                        <nav id="navigation" className="menu nav-collapse" data-component="NavBar">
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/recipes">Recipes</Link>
                                </li>
                               
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                  <a className="login-btn" href="/register">Sign Up</a>
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
