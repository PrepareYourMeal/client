import { postRegisterNewAccount } from '@frontend/services';
import * as types from '../types';

const signUpLocal = (username, password) => async dispatch => {
    if (!username) {
        throw new Error('Username is missing!');
    }

    if (!password) {
        throw new Error('Password is missing!');
    }

    try {
        dispatch({ type: types.LOADING, isLoading: true });
        await postRegisterNewAccount(username, password);
        dispatch({ type: types.LOADING, isLoading: false });
    } catch (err) {
        dispatch({ type: types.LOADING, isLoading: false });
        throw new Error(`In signUpLocal: Register failed ${err}`);
    }

    return Promise.resolve();
};

export default signUpLocal;
