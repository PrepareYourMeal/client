import * as types from '../types';

const INITIAL_STATE = { user: null, isAuthenticated: false };

const googleLoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GOOGLE_AUTH:
            return { user: action.user, isAuthenticated: true };
        default:
            return state;
    }
};

export default googleLoginReducer;
