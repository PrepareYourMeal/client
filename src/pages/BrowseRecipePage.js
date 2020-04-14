import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BrowseRecipePageScripts from '../libraryScripts/browseRecipePageScripts';
import SimpleSearch from '../components/SimpleSearch';
import AdvancedSearch from '../components/AdvanceSearch';
import RecipesGridViewer from '../components/RecipesGridViewer';

class BrowseRecipePage extends Component {
    state = {
        categoryOptions: [
            {
                label: 'All',
                key: 'All',
            },
            {
                label: 'Breakfast',
                key: 'Breakfast',
            },
            {
                label: 'Lunch',
                key: 'Lunch',
            },
            {
                label: 'Beverages',
                key: 'Beverages',
            },
            {
                label: 'Appetizers',
                key: 'Appetizers',
            },
            {
                label: 'Soups',
                key: 'Soups',
            },
            {
                label: 'Salads',
                key: 'Salads',
            },
            {
                label: 'Beef',
                key: 'Beef',
            },
            {
                label: 'Poultry',
                key: 'Poultry',
            },
            {
                label: 'Pork',
                key: 'Pork',
            },
            {
                label: 'Seafood',
                key: 'Seafood',
            },
            {
                label: 'Vegetarian',
                key: 'Vegetarian',
            },
            {
                label: 'Vegetables',
                key: 'Vegetables',
            },
            {
                label: 'Desserts',
                key: 'Desserts',
            },
            {
                label: 'Canning',
                key: 'Canning',
            },
            {
                label: 'Breads',
                key: 'Breads',
            },
            {
                label: 'Holidays',
                key: 'Holidays',
            },
        ],
        ingredientsOptions: [
            {
                label: 'sugar',
                key: 'sugar',
            },
            {
                label: 'wheat flour',
                key: 'wheat flour',
            },
            {
                label: 'baking powder',
                key: 'baking powder',
            },
            {
                label: 'eggs',
                key: 'eggs',
            },
            {
                label: 'salt',
                key: 'salt',
            },
            {
                label: 'brown sugar',
                key: 'brown sugar',
            },
            {
                label: 'chicken breast',
                key: 'chicken breast',
            },
            {
                label: 'garlic',
                key: 'garlic',
            },
            {
                label: 'milk',
                key: 'milk',
            },
            {
                label: 'oil',
                key: 'oil',
            },
            {
                label: 'sesame oil',
                key: 'sesame oil',
            },
            {
                label: 'soy sauce',
                key: 'soy sauce',
            },
            {
                label: 'butter',
                key: 'butter',
            },
            {
                label: 'carrots',
                key: 'carrots',
            },
            {
                label: 'coconut flakes',
                key: 'coconut flakes',
            },
        ],
        alergenOptions: [
            {
                label: 'Peanut',
                key: 'Peanut',
            },
            {
                label: 'Tree',
                key: 'Tree',
            },
            {
                label: 'Milk',
                key: 'Milk',
            },
            {
                label: 'Egg',
                key: 'Egg',
            },
            {
                label: 'Wheat',
                key: 'Wheat',
            },
            {
                label: 'Soy',
                key: 'Soy',
            },
        ],
        levelOptions: [
            {
                label: 'All',
                key: 'All',
            },
            {
                label: 'Easy',
                key: 'Easy',
            },
            {
                label: 'Medium',
                key: 'Medium',
            },
            {
                label: 'Hard',
                key: 'Hard',
            },
            {
                label: 'Master',
                key: 'Master',
            },
        ],
        servingOptions: [
            {
                label: 'All',
                key: 'All',
            },
            {
                label: 'for 1 person',
                key: 'for 1 person',
            },
            {
                label: 'for 2 people',
                key: 'for 2 people',
            },
            {
                label: 'for 4 people',
                key: 'for 4 people',
            },
            {
                label: 'for family',
                key: 'for family',
            },
        ],
        timingOptions: [
            {
                label: 'All',
                key: 'All',
            },
            {
                label: 'Half an hour',
                key: 'Half an hour',
            },
            {
                label: 'Less than hour',
                key: 'Less than hour',
            },
            {
                label: 'More than hour',
                key: 'More than hour',
            },
        ],
        recipes: [
            {
                name: 'Mexican Grilled Corn Recipe',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Choclate Cake With Green Tea Cream',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Thai Yellow Curry Chicken',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Avocado Melon Salad With Lime Vinaigrette',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Pollo Borracho With Homemade Tortillas',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Mexican Grilled Corn Recipe',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Choclate Cake With Green Tea Cream',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Thai Yellow Curry Chicken',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Avocado Melon Salad With Lime Vinaigrette',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Pollo Borracho With Homemade Tortillas',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Mexican Grilled Corn Recipe',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Choclate Cake With Green Tea Cream',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Thai Yellow Curry Chicken',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Avocado Melon Salad With Lime Vinaigrette',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Pollo Borracho With Homemade Tortillas',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
            {
                name: 'Mexican Grilled Corn Recipe',
                recipeLink: '/recipe',
                imageLink: 'assets/images/recipeThumb-01.jpg',
                time: '1 Hr 30 Min',
            },
        ],
    };

    componentDidMount() {
        window.scrollTo(0, 0);

        // const url = 'http://localhost:5000/api/recipes';
        // axios.get(url).then(response => response.data)
        // .then((data) => {
        //     console.log(data)
        //     this.setState({ recipes: data })
        //     console.log(this.state.recipes)

        // })
        // fetch('http://localhost:5000/api/recipes')
        //     .then(res => res.json())
        //     .then((data) => {
        //       this.setState({ recipes: data })
        //     })
        //     .catch(console.log)
    }

    onSimpleSearchTrigger = searchedParams => {
        // Use params to proceed with search
    };

    onAdvancedSearchTrigger = searchedParams => {
        // Use params to proceed with search
    };

    render() {
        const {
            categoryOptions,
            ingredientsOptions,
            alergenOptions,
            levelOptions,
            servingOptions,
            timingOptions,
            recipes,
        } = this.state;
        return (
            <>
                <div>
                    {/* Titlebar */}
                    <section id="titlebar" className="browse-all">
                        {/* Container */}
                        <div className="container">
                            <div className="eight columns">
                                <h2>Browse Recipes</h2>
                            </div>
                        </div>
                        {/* Container / End */}
                    </section>
                    {/* Container */}
                    <div className="advanced-search-container">
                        <div className="container">
                            <div className="sixteen columns">
                                <div id="advanced-search">
                                    <SimpleSearch
                                        categoryOptions={categoryOptions}
                                        ingredientsOptions={ingredientsOptions}
                                        onSearchTrigger={this.onSimpleSearchTrigger}
                                    />
                                    <div className="clearfix" />
                                    {/* Advanced Search Button */}
                                    <a href="#" className="adv-search-btn">
                                        Advanced Search <i className="fa fa-caret-down" />
                                    </a>
                                    {/* Extra Search Options */}
                                    <AdvancedSearch
                                        ingredientsOptions={ingredientsOptions}
                                        onSearchTrigger={this.onAdvancedSearchTrigger}
                                        alergenOptions={alergenOptions}
                                        levelOptions={levelOptions}
                                        servingOptions={servingOptions}
                                        timingOptions={timingOptions}
                                    />
                                    {/* Extra Search Options / End */}
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="margin-top-35" />
                    {/* Container */}
                    <RecipesGridViewer recipes={recipes} listPageView={8} />
                    {/* Wrapper / End */}
                </div>
            </>
        );
    }
}

export default BrowseRecipePage;
