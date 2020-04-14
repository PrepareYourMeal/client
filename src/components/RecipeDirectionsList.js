import React, { Component } from 'react';

class RecipeDirectionsList extends Component {
    state = {};

    render() {
        const { directions = [] } = this.props;
        if (directions && directions.length) {
            return (
                <>
                    <div className="directions-container">
                        {/* Directions */}
                        <h3>Directions</h3>
                        <ol className="directions" itemProp="recipeInstructions">
                            {directions.map((direction, directionIndex) => (
                                <li key={directionIndex}>{direction}</li>
                            ))}
                        </ol>
                    </div>
                </>
            );
        }
        return null;
    }
}

export default RecipeDirectionsList;
