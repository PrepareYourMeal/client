// import { postGoogleAuthWithTokens } from '@frontend/services';
import * as types from '../types';

const loginWithGoogle = accessToken => async dispatch => {
    if (!accessToken) {
        throw new Error('Missing the param accessToken.');
    }

    // let logedInUser;
    // try {
    //     logedInUser = await postGoogleAuthWithTokens(accessToken);
    // } catch (err) {
    //     console.error(err);
    // }

    dispatch({
        type: types.GOOGLE_AUTH,
        user: { accessToken },
    });

    return Promise.resolve();
};

export default loginWithGoogle;
