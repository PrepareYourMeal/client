import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BrowseRecipePageScripts from '../libraryScripts/browseRecipePageScripts';
import Pagination from './Pagination';

class RecipesGridViewer extends Component {
    state = {
        currentIndex: 0,
    };

    componentDidMount() {
        // Initialize libabry scripts
        BrowseRecipePageScripts.runLibraryScripts();
    }

    updateCurrentIndex = currentIndex => {
        this.setState({ currentIndex }, () => {
            // BrowseRecipePageScripts.runLibraryScripts();
        });
    };

    render() {
        const { recipes = [], listPageView = 5, sectionHeading = 'All Recipes' } = this.props;
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
                                            <Link to={recipe.recipeLink}>{recipe.name}</Link>
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
                                onUpdate={index => this.updateCurrentIndex(index)}
                            />
                        ) : null}
                    </div>
                </>
            );
        }
        return null;
    }
}

export default RecipesGridViewer;
