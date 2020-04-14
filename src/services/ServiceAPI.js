import axios from 'axios';

const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
const register = '/auth/register';
const testLogin = '/auth/testlogin';
const login = '/auth/login';
const recipes = '/api/recipes';

const axiosInstance = axios.create({ baseURL: API_BASE_URL }); // this way we don't need to do `${API_BASE_URL}${apiEndPoint}` all the time

export const postGoogleAuthWithTokens = async accessToken => {
    let res;
    try {
        res = await axiosInstance.post(testLogin, { access_token: accessToken });
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

export const postLocalLogIn = async (username, password) => {
    let res;
    try {
        res = await axiosInstance.post(login, { username, password });
    } catch (err) {
        throw new Error(`In postLocalLogIn: ${err}`);
    }

    return res.data;
};

export const getRecipes = async () => {
    let res;
    try {
        res = await axiosInstance.get(recipes);
    } catch (err) {
        throw new Error(`In getRecipes: ${err}`);
    }

    if (res.status !== 200) {
        throw new Error(`In getRecipes: Request failed with ${res.status}`);
    }

    return res.data;
};
