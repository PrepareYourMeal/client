import { UPDATE_RECIPES, CLEAR_RECIPES } from "../actions";

export const recipesDataReducer = (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case UPDATE_RECIPES: {
            newState = action.payload.recipes
            break;
        }
        case CLEAR_RECIPES: {
            newState = {};
            break;
        }
        default: {
            
        }
    }
    return newState;
}
