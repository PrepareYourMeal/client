import * as types from "../actions/ActionTypes";

export const recipesDataReducer= (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case types.UPDATE_RECIPES: {
            newState = action.payload.recipes
            break;
        }
        case types.CLEAR_RECIPES: {
            newState = {};
            break;
        }
        default: {
            
        }
    }
    return newState;
}

