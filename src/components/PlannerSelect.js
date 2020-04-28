import React, { Component } from "react";
import "../assets/dashboard.css";
import FoodCard from "../components/FoodCard";
import { Row, Col } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000,
    },
    items: 8,
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 5,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 3,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
};

class PlannerSelect extends Component {
  render() {
    const { plannerDays } = this.props;
    return (
      <React.Fragment>
        <div className="food-card">
          <p className="date-label">Monday</p>
          {plannerDays && plannerDays.monday ? (
            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              {plannerDays.monday.map((recipe, recipeIndex) => (
                <FoodCard
                  {...recipe}
                  image={recipe.imageLink}
                  time={recipe.time}
                  title={recipe.name}
                  key={recipeIndex}
                  removePlanner={() =>
                    this.props.removePlanner(recipe, "monday")
                  }
                />
              ))}
            </Carousel>
          ) : null}
        </div>
        <div className="food-card">
          <p className="date-label">Tuesday</p>
          {plannerDays && plannerDays.tuesday ? (
            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              {plannerDays.tuesday.map((recipe, recipeIndex) => (
                <FoodCard
                  {...recipe}
                  image={recipe.imageLink}
                  time={recipe.time}
                  title={recipe.name}
                  key={recipeIndex}
                  removePlanner={() =>
                    this.props.removePlanner(recipe, "tuesday")
                  }
                />
              ))}
            </Carousel>
          ) : null}
        </div>
        <div className="food-card">
          <p className="date-label">Wednesday</p>
          {plannerDays && plannerDays.wednesday ? (
            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              {plannerDays.wednesday.map((recipe, recipeIndex) => (
                <FoodCard
                  {...recipe}
                  image={recipe.imageLink}
                  time={recipe.time}
                  title={recipe.name}
                  key={recipeIndex}
                  removePlanner={() =>
                    this.props.removePlanner(recipe, "wednesday")
                  }
                />
              ))}
            </Carousel>
          ) : null}
        </div>
        <div className="food-card">
          <p className="date-label">Thursday</p>
          {plannerDays && plannerDays.thursday ? (
            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              {plannerDays.thursday.map((recipe, recipeIndex) => (
                <FoodCard
                  {...recipe}
                  image={recipe.imageLink}
                  time={recipe.time}
                  title={recipe.name}
                  key={recipeIndex}
                  removePlanner={() =>
                    this.props.removePlanner(recipe, "thursday")
                  }
                />
              ))}
            </Carousel>
          ) : null}
        </div>
        <div className="food-card">
          <p className="date-label">Friday</p>
          {plannerDays && plannerDays.friday ? (
            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              {plannerDays.friday.map((recipe, recipeIndex) => (
                <FoodCard
                  {...recipe}
                  image={recipe.imageLink}
                  time={recipe.time}
                  title={recipe.name}
                  key={recipeIndex}
                  removePlanner={() =>
                    this.props.removePlanner(recipe, "friday")
                  }
                />
              ))}
            </Carousel>
          ) : null}
        </div>
        <div className="food-card">
          <p className="date-label">Saturday</p>
          {plannerDays && plannerDays.saturday ? (
            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              {plannerDays.saturday.map((recipe, recipeIndex) => (
                <FoodCard
                  {...recipe}
                  image={recipe.imageLink}
                  time={recipe.time}
                  title={recipe.name}
                  key={recipeIndex}
                  removePlanner={() =>
                    this.props.removePlanner(recipe, "saturday")
                  }
                />
              ))}
            </Carousel>
          ) : null}
        </div>

        <div className="food-card">
          <p className="date-label">Sunday</p>

          {plannerDays && plannerDays.sunday ? (
            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              {plannerDays.sunday.map((recipe, recipeIndex) => (
                <FoodCard
                  {...recipe}
                  image={recipe.imageLink}
                  removePlanner={() =>
                    this.props.removePlanner(recipe, "sunday")
                  }
                  time={recipe.time}
                  title={recipe.name}
                  key={recipeIndex}
                />
              ))}
            </Carousel>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default PlannerSelect;
