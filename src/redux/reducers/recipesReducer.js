import * as types from '../types';

const INITIAL_STATE = [];

const recipesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_RECIPES:
            return action.recipes;
        default:
            return state;
    }
};

export default recipesReducer;
