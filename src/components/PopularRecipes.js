import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PopularRecipies extends Component {
    state = {};

    render() {
        const { recipes } = this.props;
        if (recipes && recipes.length) {
            return (
                <div className="widget">
                    <h4 className="headline">Popular Recipes</h4>
                    <span className="line margin-bottom-30" />
                    <div className="clearfix" />
                    {recipes.map((recipe, recipeIndex) => (
                        <Link to={recipe.link} key={recipeIndex} className="featured-recipe">
                            <img src={recipe.image} alt />
                            <div className="featured-recipe-content">
                                <h4>{recipe.name}</h4>
                                <div className="rating five-stars">
                                    <div className="star-rating" />
                                    <div className="star-bg" />
                                </div>
                            </div>
                            <div className="post-icon" />
                        </Link>
                    ))}
                    <div className="clearfix" />
                </div>
            );
        }
        return null;
    }
}

export default PopularRecipies;
