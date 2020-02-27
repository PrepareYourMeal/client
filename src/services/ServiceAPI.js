import axios from 'axios';

const API_BASE_URL = 'https://stoveandoven.appspot.com/';
const googleAuth = '/auth/googletoken';
const register = '/auth/register';

const axiosInstance = axios.create({ baseURL: API_BASE_URL });

export const postGoogleAuthWithTokens = async (accessToken, idToken) => {
    let res;
    try {
        res = await axiosInstance.post(googleAuth, { access_token: accessToken });
    } catch (err) {
        throw new Error(`In postGoogleAuthWithTokens: ${err}`);
    }

    return res.data;
};

export const postRegisterNewAccount = async (username, password) => {
    let res;
    try {
        res = await axiosInstance.post(register, { username, password });
    } catch (err) {
        throw new Error(`In postRegisterNewAccount: ${err}`);
    }

    if (res.status !== 200) {
        throw new Error(`In postRegisterNewAccount: Request failed with ${res.status}`);
    }

    return Promise.resolve();
};
