import * as types from '../actions/ActionTypes';

const INITIAL_STATE = { googleUser: null, localUser: null, isAuthenticated: false };

export const userAuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GOOGLE_AUTH:
            return { ...state, googleUser: action.user, isAuthenticated: true };
        case types.LOCAL_AUTH:
            return { ...state, localUser: action.user, isAuthenticated: true };
        case types.LOGOUT_AUTH:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
};

