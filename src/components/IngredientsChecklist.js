import React, { Component } from "react";
import { deepClone } from "../helper-methods";

class IngredientsCheckList extends Component {
  state = {
    ingredients: []
  };

  componentDidMount() {
    this._parseAndLoadIngredients();
  }

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.ingredients) !==
      JSON.stringify(this.props.ingredients)
    ) {
      this._parseAndLoadIngredients();
    }
  }

  _parseAndLoadIngredients = () => {
    const { ingredients: propsIngredients } = deepClone(this.props);
    this.setState({
      ingredients: propsIngredients.map((ingredient, ingredientIndex) => {
        return {
          ...ingredient,
          isChecked: false,
          index: ingredientIndex
        };
      })
    });
  };

  _toggleCheckBox = index => {
    const { ingredients } = deepClone(this.state);
    ingredients[index].isChecked = !ingredients[index].isChecked;
    this.setState({ ingredients });
  };

  render() {
    const { ingredients = [] } = this.state;
    if (ingredients && ingredients.length) {
      return (
        <>
          <div className="ingredients-container">
            {/* Ingredients */}
            <h3>Ingredients</h3>
            <ul className="ingredients">
              {ingredients.map((ingredient, ingredientIndex) => (
                <li
                  key={ingredientIndex}
                  onClick={e => this._toggleCheckBox(ingredient.index)}
                >
                  <input type="checkbox" checked={ingredient.isChecked} />
                  <label itemProp="ingredients" htmlFor="check-1">
                    {ingredient.quantity} {ingredient.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

export default IngredientsCheckList;