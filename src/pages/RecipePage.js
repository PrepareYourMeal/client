import React, { Component } from 'react';
import RecipePageScripts from '../libraryScripts/recipeScrips';
import AuthorInfo from '../components/AuthorInfoCard';
import PopularRecipies from '../components/PopularRecipes';
import RecipesGridViewer from '../components/RecipesGridViewer';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import SquareSocialButtons from '../components/SquareSocialButtons';
import IngredientsCheckList from '../components/IngredientsChecklist';
import RecipeDirectionsList from '../components/RecipeDirectionsList';

class RecipePage extends Component {
    state = {
        author: {
            name: (
                <>
                    Stove & Oven
                    <br />
                </>
            ),
            profileImage: 'assets/images/author-photo.png',
            email: 'hello@stoveandoven.com',
            introduction: `We at the Stove & Oven team love bringing you the best recipes...`,
        },
        popularRecipes: [
            {
                name: <>Choclate Cake With Green Tea Cream</>,
                rating: 5,
                link: '/recipe',
                image: 'https://spoonacular.com/recipeImages/605055-556x370.jpg',
            },
            {
                name: <>Mexican Grilled Corn Recipe</>,
                rating: 5,
                link: '/recipe',
                image: 'assets/images/featuredRecipe-01.jpg',
            },
            {
                name: <>Pollo Borracho With Homemade Tortillas</>,
                rating: 5,
                link: '/recipe',
                image: 'assets/images/featuredRecipe-01.jpg',
            },
        ],
        relatedRecipes: [
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
        ],
        sidebarSocialLinks: [
            {
                count: 1234,
                label: 'Fans',
                wrapperClass: 'facebook-share',
                buttonText: 'Like',
                redirectTo: 'https://www.facebook.com',
            },
            {
                count: 863,
                label: 'Fans',
                wrapperClass: 'twitter-share',
                buttonText: 'Follow',
                redirectTo: 'https://www.twitter.com',
            },
            {
                count: 902,
                label: 'Fans',
                wrapperClass: 'google-plus-share',
                buttonText: 'Follow',
                redirectTo: 'https://www.google.com',
            },
        ],
        socialButton: [
            {
                count: 1234,
                label: 'Fans',
                wrapperClass: 'facebook-share',
                buttonText: 'Like',
                redirectTo: 'https://www.facebook.com',
            },
            {
                count: 863,
                label: 'Fans',
                wrapperClass: 'twitter-share',
                buttonText: 'Follow',
                redirectTo: 'https://www.twitter.com',
            },
            {
                count: 902,
                label: 'Fans',
                wrapperClass: 'google-plus-share',
                buttonText: 'Follow',
                redirectTo: 'https://www.google.com',
            },
        ],

        directions: [
            `In a Dutch oven, heat oil over medium heat until hot,
      but not smoking. Pat the meat dry with paper towels and
      brown in batches, transferring the meat with a slotted
      spoon to a bowl as they are done.`,
            `In the fat remaining in the pot, cook the onions until
    softened, about 5 minutes.`,
            `Return meat to the pot with any juices in the bowl and
    add the tomatoes with juice, chiles, beer, beef broth,
    oregano, cumin, and Worcestershire sauce. Season with
    salt and pepper to taste.`,
            `Bring to a boil and reduce heat. Simmer, partially
    covered, for 2 1/2 hours or until meat is tender.`,
        ],
        ingredients: [
            {
                label: 'cubed beef stew meat',
                quantity: '2 pounds',
            },
            {
                label: 'vegetable oil',
                quantity: '3 tablespoons',
            },
            {
                label: 'beef bouillon, crumbled',
                quantity: '4 cubes',
            },
            {
                label: 'onion, chopped',
                quantity: '1 large',
            },
            {
                label: 'dried rosemary',
                quantity: '1 teaspoon',
            },
            {
                label: 'ground black pepper',
                quantity: '1/2 teaspoon',
            },
            {
                label: 'potatoes, peeled and cubed',
                quantity: '3 large',
            },
            {
                label: 'carrots cut into 1 inch pieces',
                quantity: '4',
            },
            {
                label: 'stalks celery, cut into 1 inch pieces',
                quantity: '4',
            },
        ],
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        // Initialize libabry scripts
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
            directions,
        } = this.state;

        return (
            <>
                <div>
                    {/* Recipe Background */}
                    <div className="recipeBackground">
                        <img src="assets/images/carousel/Recipe-Page.jpg" alt="recipe page" />
                    </div>
                    {/* Content  */}
                    <div className="container" itemScope itemType="http://schema.org/Recipe">
                        {/* Recipe */}
                        <div className="twelve columns">
                            <div className="alignment">
                                {/* Header */}
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
                                        alt="recipe"
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
                                    <button type="button" onClick={() => window.print()} className="print">
                                        <i className="fa fa-print" /> Print
                                    </button>
                                    <div className="clearfix" />
                                </section>
                                {/* Text */}
                                <p itemProp="description">
                                    This is a very basic beef stew. It’s easy, delicious and inexpensive to make. While
                                    there are hundreds of variations of this traditional recipe, it’s hard to improve on
                                    this version’s savory and comforting goodness.
                                </p>
                                <div className="recipe-container">
                                    <IngredientsCheckList ingredients={ingredients} />
                                    <RecipeDirectionsList directions={directions} />
                                </div>
                                <div className="clearfix" />
                                {/* Share Post */}
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
                                <RecipesGridViewer recipes={relatedRecipes} sectionHeading="You May Also Like" />

                                <div className="clearfix" />
                                <div className="margin-top-15" />
                                {/* Comments */}
                                <Reviews reviews={reviews} />
                                <div className="clearfix" />
                                <br />
                                {/* Add Comment */}
                            </div>
                        </div>
                        {/* Sidebar  */}
                        <div className="four columns">
                            {/* Search Form */}
                            <div className="widget search-form">
                                <nav className="search">
                                    <form action="#" method="get">
                                        <button type="submit">
                                            <i className="fa fa-search" />
                                        </button>
                                        <input className="search-field" type="text" placeholder="Search for recipes" />
                                    </form>
                                </nav>
                                <div className="clearfix" />
                            </div>
                            {/* Author Box */}
                            <AuthorInfo
                                name={author.name}
                                profileImage={author.profileImage}
                                email={author.email}
                                introduction={author.introduction}
                            />
                            {/* Popular Recipes */}
                            <PopularRecipies recipes={popularRecipes} />
                            <SquareSocialButtons links={sidebarSocialLinks} />
                        </div>
                    </div>
                    {/* Container / End */}
                    {/* Wrapper / End */}
                </div>
            </>
        );
    }
}

export default RecipePage;
