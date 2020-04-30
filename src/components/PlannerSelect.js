import React, {Component} from "react";
import "../assets/dashboard.css";
import FoodCard from "../components/FoodCard";
import {Row, Col} from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: { // the naming can be any, depends on you.
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 8
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 5
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 3
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }
};

class PlannerSelect extends Component {
    render() {
        const {plannerDays} = this.props;
        return (
            <React.Fragment>
                <div className="private-header">
                    <h1>My Meal Planner</h1>
                    <div className="headerButton">
                        <span className="headIcon">
                            <svg id="Calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" class="icon iconXl">
                                <title>Calendar</title>
                                <path fill-rule="evenodd" fill="currentColor" d="M45.79,52.48h5.8v-5.8h-5.8Zm0-10.14h5.8v-5.8h-5.8Zm0,20.28h5.8v-5.8h-5.8Zm8.7-20.28h5.79v-5.8H54.49Zm0,10.14h5.79v-5.8H54.49Zm-17.39,0h5.8v-5.8H37.1Zm0-10.14h5.8v-5.8H37.1Zm0,20.28h5.8v-5.8H37.1ZM19.72,52.48h5.79v-5.8H19.72Zm0-10.14h5.79v-5.8H19.72Zm42-27.92H53.81V11.14a1.45,1.45,0,1,0-2.89,0v3.28H29.08V11.14a1.45,1.45,0,1,0-2.89,0v3.28H18.27a5.8,5.8,0,0,0-5.79,5.8v45.3a5.79,5.79,0,0,0,5.79,5.79H61.73a5.79,5.79,0,0,0,5.79-5.79V20.22A5.8,5.8,0,0,0,61.73,14.42Zm2.9,51.1a2.9,2.9,0,0,1-2.9,2.89H18.27a2.9,2.9,0,0,1-2.9-2.89V30.75H64.63Zm0-37.67H15.37V20.22a2.9,2.9,0,0,1,2.9-2.9h7.92v3.29a1.45,1.45,0,1,0,2.89,0V17.32H50.92v3.29a1.45,1.45,0,1,0,2.89,0V17.32h7.92a2.9,2.9,0,0,1,2.9,2.9ZM19.72,62.62h5.79v-5.8H19.72Zm8.69-20.28h5.8v-5.8h-5.8Zm0,20.28h5.8v-5.8h-5.8Zm0-10.14h5.8v-5.8h-5.8Z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="food-card">
                    <p className="date-label">Monday</p>
                    {
                    plannerDays && plannerDays.monday ? (
                        <Carousel responsive={responsive}
                            itemClass="carousel-item-padding-40-px">
                            {
                            plannerDays.monday.map((recipe, recipeIndex) => (
                                <FoodCard {...recipe}
                                    image={
                                        recipe.imageLink
                                    }
                                    time={
                                        recipe.time
                                    }
                                    title={
                                        recipe.name
                                    }
                                    key={recipeIndex}
                                    removePlanner={
                                        () => this.props.removePlanner(recipe, "monday")
                                    }/>
                            ))
                        } </Carousel>
                    ) : null
                } </div>
                <div className="food-card">
                    <p className="date-label">Tuesday</p>
                    {
                    plannerDays && plannerDays.tuesday ? (
                        <Carousel responsive={responsive}
                            itemClass="carousel-item-padding-40-px">
                            {
                            plannerDays.tuesday.map((recipe, recipeIndex) => (
                                <FoodCard {...recipe}
                                    image={
                                        recipe.imageLink
                                    }
                                    time={
                                        recipe.time
                                    }
                                    title={
                                        recipe.name
                                    }
                                    key={recipeIndex}
                                    removePlanner={
                                        () => this.props.removePlanner(recipe, "tuesday")
                                    }/>
                            ))
                        } </Carousel>
                    ) : null
                } </div>
                <div className="food-card">
                    <p className="date-label">Wednesday</p>
                    {
                    plannerDays && plannerDays.wednesday ? (
                        <Carousel responsive={responsive}
                            itemClass="carousel-item-padding-40-px">
                            {
                            plannerDays.wednesday.map((recipe, recipeIndex) => (
                                <FoodCard {...recipe}
                                    image={
                                        recipe.imageLink
                                    }
                                    time={
                                        recipe.time
                                    }
                                    title={
                                        recipe.name
                                    }
                                    key={recipeIndex}
                                    removePlanner={
                                        () => this.props.removePlanner(recipe, "wednesday")
                                    }/>
                            ))
                        } </Carousel>
                    ) : null
                } </div>
                <div className="food-card">
                    <p className="date-label">Thursday</p>
                    {
                    plannerDays && plannerDays.thursday ? (
                        <Carousel responsive={responsive}
                            itemClass="carousel-item-padding-40-px">
                            {
                            plannerDays.thursday.map((recipe, recipeIndex) => (
                                <FoodCard {...recipe}
                                    image={
                                        recipe.imageLink
                                    }
                                    time={
                                        recipe.time
                                    }
                                    title={
                                        recipe.name
                                    }
                                    key={recipeIndex}
                                    removePlanner={
                                        () => this.props.removePlanner(recipe, "thursday")
                                    }/>
                            ))
                        } </Carousel>
                    ) : null
                } </div>
                <div className="food-card">
                    <p className="date-label">Friday</p>
                    {
                    plannerDays && plannerDays.friday ? (
                        <Carousel responsive={responsive}
                            itemClass="carousel-item-padding-40-px">
                            {
                            plannerDays.friday.map((recipe, recipeIndex) => (
                                <FoodCard {...recipe}
                                    image={
                                        recipe.imageLink
                                    }
                                    time={
                                        recipe.time
                                    }
                                    title={
                                        recipe.name
                                    }
                                    key={recipeIndex}
                                    removePlanner={
                                        () => this.props.removePlanner(recipe, "friday")
                                    }/>
                            ))
                        } </Carousel>
                    ) : null
                } </div>
                <div className="food-card">
                    <p className="date-label">Saturday</p>
                    {
                    plannerDays && plannerDays.saturday ? (
                        <Carousel responsive={responsive}
                            itemClass="carousel-item-padding-40-px">
                            {
                            plannerDays.saturday.map((recipe, recipeIndex) => (
                                <FoodCard {...recipe}
                                    image={
                                        recipe.imageLink
                                    }
                                    time={
                                        recipe.time
                                    }
                                    title={
                                        recipe.name
                                    }
                                    key={recipeIndex}
                                    removePlanner={
                                        () => this.props.removePlanner(recipe, "saturday")
                                    }/>
                            ))
                        } </Carousel>
                    ) : null
                } </div>

                <div className="food-card">
                    <p className="date-label">Sunday</p>

                    {
                    plannerDays && plannerDays.sunday ? (
                        <Carousel responsive={responsive}
                            itemClass="carousel-item-padding-40-px">
                            {
                            plannerDays.sunday.map((recipe, recipeIndex) => (
                                <FoodCard {...recipe}
                                    image={
                                        recipe.imageLink
                                    }
                                    removePlanner={
                                        () => this.props.removePlanner(recipe, "sunday")
                                    }
                                    time={
                                        recipe.time
                                    }
                                    title={
                                        recipe.name
                                    }
                                    key={recipeIndex}/>
                            ))
                        } </Carousel>
                    ) : null
                } </div>
            </React.Fragment>
        );
    }
}

export default PlannerSelect;
