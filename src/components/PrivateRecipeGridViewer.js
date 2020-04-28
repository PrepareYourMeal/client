import { Col, Row } from "antd";
import React, { Component } from "react";
import ImageCard from "../components/ImageCard";
import Pagination from "./Pagination";

class PrivateRecipeGridViewer extends Component {
  state = {
    currentIndex: 0,
  };

  _updateCurrentIndex = (currentIndex) => {
    this.setState({ currentIndex });
  };

  render() {
    const { recipes = [], listPageView = 5 } = this.props;
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
        <div className="image-card">
          <Row gutter={16}>
            {recipesInCurrentView.map((recipe, recipeIndex) => (
              <Col span={6} key={recipeIndex}>
                <ImageCard
                  {...recipe}
                  image={recipe.imageLink}
                  time={recipe.time}
                  title={recipe.name}
                  addToFavourites={() => this.props.addToFavourites(recipe)}
                  addToPlanner={() => this.props.addToPlanner(recipe)}
                  removeFromFavourites={() =>
                    this.props.removeFromFavourites(recipe)
                  }
                />
              </Col>
            ))}
          </Row>
          <div className="container" id="private-grip-pagination-wrapper">
            {isPaginationRequired ? (
              <Pagination
                currentIndex={currentIndex}
                listPageView={listPageView}
                total={recipes.length}
                onUpdate={(index) => this._updateCurrentIndex(index)}
              />
            ) : null}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container no-results-wrapper">
          <h3>No recipes yet, let's get cooking!</h3>
        </div>
      );
    }
  }
}

export default PrivateRecipeGridViewer;
