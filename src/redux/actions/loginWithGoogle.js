import { postGoogleLogin } from '../../services';
import * as types from './ActionTypes';

const loginWithGoogle = accessToken => async dispatch => {
    if (!accessToken) {
        throw new Error('Missing the param accessToken.');
    }

    const { userId } = await postGoogleLogin(accessToken);

    dispatch({
        type: types.GOOGLE_AUTH,
        user: { accessToken, userId },
    });

    return Promise.resolve();
};

export default loginWithGoogle;
