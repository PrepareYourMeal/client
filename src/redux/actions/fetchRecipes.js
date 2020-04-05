import { getRecipes } from '@frontend/services';
import * as types from '../types';

const fetchRecipes = () => async dispatch => {
    let allRecipes;
    try {
        allRecipes = await getRecipes();
    } catch (err) {
        console.log(err);
    }

    dispatch({
        type: types.GET_RECIPES,
        recipes: allRecipes,
    });

    return Promise.resolve();
};

export default fetchRecipes;
