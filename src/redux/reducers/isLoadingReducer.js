import * as types from '../types';

const INITIAL_STATE = false;

const isLoadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

export default isLoadingReducer;
