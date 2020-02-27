import { combineReducers } from 'redux';
import googleLoginReducer from './googleLoginReducer';
import isLoadingReducer from './isLoadingReducer';

export default combineReducers({
    googleLoginReducer,
    isLoadingReducer,
});
