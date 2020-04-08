import { postLocalLogIn } from '@frontend/services';
import * as types from '../types';

const loginWithLocalAuth = (username, password) => async dispatch => {
    if (!username || !password) {
        throw new Error('Missing username or password!');
    }

    let logedInUser;
    try {
        logedInUser = await postLocalLogIn(username, password);
    } catch (err) {
        console.log(err);
    }

    dispatch({
        type: types.LOCAL_AUTH,
        user: logedInUser,
    });

    return Promise.resolve();
};

export default loginWithLocalAuth;
