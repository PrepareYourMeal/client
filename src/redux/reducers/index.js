import { combineReducers } from 'redux';
import googleLoginReducer from './googleLoginReducer';
import isLoadingReducer from './isLoadingReducer';
import recipesReducers from './recipesReducer';

export default combineReducers({
    googleLoginReducer,
    isLoadingReducer,
    recipes: recipesReducers,
});
