import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/login.css";
import { hideLoader, showLoader } from "../redux/actions/loader-data";
import { Link } from 'react-router-dom';
import RecipeCarousel from '../components/recipe-carousel';
import CategoryList from '../components/category-list';
import RecipesListViewer from '../components/recipes-list-viewer';
import SquareSocialButtons from "../components/square-social-buttons";


class HomePage extends Component {
  state = {
    carouselRecipes: [{
      title: <>Hot Pepper <br /> Chicken</>,
      image: "../assets/images/carousel/Slide-1.jpg",
      tags: ["Baking"],
      servings: 6,
      time: "30 MIN",
      recipeLink: "/recipes"
    },{
      title: <>Grilled Steak With<br />Asparagus and Tomato</>,
      image: "../assets/images/carousel/Slide-2.jpg",
      tags: ["Curry"],
      servings: 4,
      time: "1 Hr 20 Min",
      recipeLink: "/recipes"
    },{
      title: <>Hungarian<br />Tomato Soup</>,
      image: "../assets/images/carousel/Slide-3.jpg",
      tags: ["Salads"],
      servings: 1,
      time: "15 MIN",
      recipeLink: "/recipes"
    },{
      title: <>Granola Cereal Bowl</>,
      image: "../assets/images/carousel/Slide-4.jpg",
      tags: ["Beef"],
      servings: 4,
      time: "2 Hr 30 Min",
      recipeLink: "/recipes"
    },{
      title: <>Vegetable Falaffel Wraps</>,
      image: "../assets/images/carousel/Slide-5.jpg",
      tags: ["Soups"],
      servings: 4,
      time: "1 Hr 30 Min",
      author: "Sandra Fortin",
      recipeLink: "/recipes"
    }],
    categories: [{
      name: "Lunch",
      itemsAvailable: 10
    },{
      name: "Breakfast",
      itemsAvailable: 20
    },{
      name: "Soups",
      itemsAvailable: 5
    },{
      name: "Salads",
      itemsAvailable: 2
    },{
      name: "Beef",
      itemsAvailable: 1
    },{
      name: "Seafood",
      itemsAvailable: 3
    },{
      name: "Vegetarian",
      itemsAvailable: 5
    },{
      name: "Vegetables",
      itemsAvailable: 10
    }],
    latestRecipes: [{
      name: "Mexican Grilled Corn Recipe",
      recipeLink: "/recipe",
      imageLink: "assets/images/recipeThumb-01b.jpg",
      summary: `Maecenas in massa eget urna ullamcorper pharetra. Curabitur
      laoreet scelerisque bibendum. Aenean ullamcorper neque ac
      tristique semper. Phasellus enim mauris, mollis vulputate
      blandit in, ornare sed leo.`,
      servings: 4,
      time: "1 Hr 30 Min",
    },{
      name: "Choclate Cake With Green Tea Cream",
      recipeLink: "/recipe",
      imageLink: "assets/images/recipeThumb-01b.jpg",
      summary: `Maecenas in massa eget urna ullamcorper pharetra. Curabitur
      laoreet scelerisque bibendum. Aenean ullamcorper neque ac
      tristique semper. Phasellus enim mauris, mollis vulputate
      blandit in, ornare sed leo.`,
      servings: 4,
      time: "1 Hr 30 Min",
    },{
      name: "Thai Yellow Curry Chicken",
      recipeLink: "/recipe",
      imageLink: "assets/images/recipeThumb-01b.jpg",
      summary: `Maecenas in massa eget urna ullamcorper pharetra. Curabitur
      laoreet scelerisque bibendum. Aenean ullamcorper neque ac
      tristique semper. Phasellus enim mauris, mollis vulputate
      blandit in, ornare sed leo.`,
      servings: 4,
      time: "1 Hr 30 Min",
    },{
      name: "Avocado Melon Salad With Lime Vinaigrette",
      recipeLink: "/recipe",
      imageLink: "assets/images/recipeThumb-01b.jpg",
      summary: `Maecenas in massa eget urna ullamcorper pharetra. Curabitur
      laoreet scelerisque bibendum. Aenean ullamcorper neque ac
      tristique semper. Phasellus enim mauris, mollis vulputate
      blandit in, ornare sed leo.`,
      servings: 4,
      time: "1 Hr 30 Min",
    },{
      name: "Pollo Borracho With Homemade Tortillas",
      recipeLink: "/recipe",
      imageLink: "assets/images/recipeThumb-01b.jpg",
      summary: `Maecenas in massa eget urna ullamcorper pharetra. Curabitur
      laoreet scelerisque bibendum. Aenean ullamcorper neque ac
      tristique semper. Phasellus enim mauris, mollis vulputate
      blandit in, ornare sed leo.`,
      servings: 4,
      time: "1 Hr 30 Min",
    },],
    socialLinks: [{
      count: 1234,
      label: "Fans",
      wrapperClass: "facebook-share",
      buttonText: "Like",
      redirectTo: "https://www.facebook.com"
    },{
      count: 863,
      label: "Fans",
      wrapperClass: "twitter-share",
      buttonText: "Follow",
      redirectTo: "https://www.twitter.com"
    },{
      count: 902,
      label: "Fans",
      wrapperClass: "google-plus-share",
      buttonText: "Follow",
      redirectTo: "https://www.google.com"
    }]
  };

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    const { 
      carouselRecipes, 
      categories, 
      latestRecipes,
      socialLinks
    } = this.state;
    
    return (
      <React.Fragment>
        <RecipeCarousel recipes={carouselRecipes} />
        <div className="container" data-component="Main">

          <RecipesListViewer 
            recipes={latestRecipes}
            listPageView={4} 
          />
          {/* Sidebar */}
          <div className="four columns">
            {/* Search Form */}
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
            {/* Categories */}
            <CategoryList categories={categories}/>
            <SquareSocialButtons links={socialLinks} />
          </div>
        </div>
        <div className="margin-top-5" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showLoader: text => dispatch(showLoader(text)),
    hideLoader: () => dispatch(hideLoader()),
    // updateUserData: userData => dispatch(updateUserData(userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
