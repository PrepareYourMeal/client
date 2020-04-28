import { postRegisterNewAccount } from '../../services';
import * as types from '../actions/ActionTypes';

const signUpLocal = (username, password) => async dispatch => {
    if (!username) {
        throw new Error('Username is missing!');
    }

    if (!password) {
        throw new Error('Password is missing!');
    }

    try {
        dispatch({ type: types.SHOW_LOADER, isLoading: true });
        await postRegisterNewAccount(username, password);
        dispatch({ type: types.HIDE_LOADER, isLoading: false });
    } catch (err) {
        dispatch({ type: types.HIDE_LOADER, isLoading: false });
        throw new Error(`In signUpLocal: Register failed ${err}`);
    }

    return Promise.resolve();
};

export default signUpLocal;
