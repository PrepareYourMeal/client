import React, { Component } from 'react';

class IngredientsCheckList extends Component {
    state = {};

    render() {
        const { ingredients = [] } = this.props;
        if (ingredients && ingredients.length) {
            return (
                <>
                    <div className="ingredients-container">
                        {/* Ingredients */}
                        <h3>Ingredients</h3>
                        <ul className="ingredients">
                            {ingredients.map((ingredient, ingredientIndex) => (
                                <li key={ingredientIndex}>
                                    <input id="check-1" type="checkbox" name="check" defaultValue="check-1" />
                                    <label itemProp="ingredients" htmlFor="check-1">
                                        {ingredient.quantity} {ingredient.label}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            );
        }
        return null;
    }
}

export default IngredientsCheckList;
