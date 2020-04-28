// import { postGoogleAuthWithTokens } from '@frontend/services';
import * as types from './ActionTypes';

const loginWithGoogle = accessToken => async dispatch => {
    if (!accessToken) {
        throw new Error('Missing the param accessToken.');
    }

    dispatch({
        type: types.GOOGLE_AUTH,
        user: { accessToken },
    });

    return Promise.resolve();
};

export default loginWithGoogle;
