import { UPDATE_RECIPES, CLEAR_RECIPES } from "./action-types";
import { fetchRecipes } from '../../http-calls/index';


export const fetchRecipesFromServer = () => {
    return async (dispatch, getState) => {
        try {
          const recipes = await fetchRecipes();
          dispatch(updateRecipes(recipes))
        } catch (error) {
  
        }
      }
}

export const updateRecipes = recipes => {
    return {
        type: UPDATE_RECIPES,
        payload: {
            recipes
        }
    }
}

export const clearRecipes = () => {
    return {
        type: CLEAR_RECIPES
    }
}