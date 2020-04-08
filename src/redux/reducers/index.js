import { combineReducers } from 'redux';
import userAuthReducer from './userAuthReducer';
import isLoadingReducer from './isLoadingReducer';
import recipesReducers from './recipesReducer';

export default combineReducers({
    user: userAuthReducer,
    isLoading: isLoadingReducer,
    recipes: recipesReducers,
});
