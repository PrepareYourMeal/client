import * as types from "./ActionTypes";
import { getRecipes } from '../../services';


export const fetchRecipes = () => {
    return async (dispatch, getState) => {
        try {
          const recipes = await getRecipes();
          dispatch(updateRecipes(recipes))
        } catch (error) {
  
        }
      }
}

export const updateRecipes = recipes => {
    return {
        type: types.UPDATE_RECIPES,
        payload: {
            recipes
        }
    }
}

export const clearRecipes = () => {
    return {
        type: types.CLEAR_RECIPES
    }
}