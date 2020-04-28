import axios from "axios";
import { store } from "../redux/store";

const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
const register = "/auth/register";
const testLogin = "/auth/testlogin";
const login = "/auth/login";
const recipes = "/api/recipes";
const favorites = "/api/favorites";
const planner = "/api/planner";

const getUserAuthData = () => {
  const {
    user: { localUser },
  } = store.getState();
  return localUser;
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
}); // this way we don't need to do `${API_BASE_URL}${apiEndPoint}` all the time

export const postGoogleAuthWithTokens = async (accessToken) => {
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
    throw new Error(
      `In postRegisterNewAccount: Request failed with ${res.status}`
    );
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

/**
 * To fetch user data
 */
export const getUser = async () => {
  const { jwtAuthToken, userId } = getUserAuthData();
  let res;
  try {
    res = await axiosInstance.get(
      `api/user/${userId}/profile?jwtAuthToken=${jwtAuthToken}`
    );
  } catch (error) {
    throw new Error(`In getuser: ${error}`);
  }
  if (res.status !== 200) {
    throw new Error(`In getuser: Request failed with ${res.status}`);
  }
  return res.data;
};

/**
 * To add new recipe to planner
 */
export const addRecipeToPlanner = async (recipeId, day) => {
  const { jwtAuthToken, userId } = getUserAuthData();
  let res;
  try {
    res = await axiosInstance.post(
      `api/user/${userId}/planner/${day}?jwtAuthToken=${jwtAuthToken}`,
      { recipeId }
    );
  } catch (error) {
    throw new Error(`In addRecipeToPlanner: ${error}`);
  }
  if (res.status !== 200) {
    throw new Error(`In addRecipeToPlanner: Request failed with ${res.status}`);
  }
  return res.data;
};

/**
 * To remove recipe from planner
 */
export const removeRecipeFromPlanner = async (recipeId, day) => {
  const { jwtAuthToken, userId } = getUserAuthData();
  let res;
  try {
    res = await axiosInstance.delete(
      `api/user/${userId}/planner/${day}/${recipeId}?jwtAuthToken=${jwtAuthToken}`
    );
  } catch (error) {
    throw new Error(`In removeRecipeFromPlanner: ${error}`);
  }
  if (res.status !== 200) {
    throw new Error(
      `In removeRecipeFromPlanner: Request failed with ${res.status}`
    );
  }
  return res.data;
};

/**
 * To add new recipe to favourites
 */
export const addRecipeToFavourtites = async (recipeId) => {
  const { jwtAuthToken, userId } = getUserAuthData();
  let res;
  try {
    res = await axiosInstance.post(
      `api/user/${userId}/favorite?jwtAuthToken=${jwtAuthToken}`,
      { recipeId }
    );
  } catch (error) {
    throw new Error(`In addRecipeToFavourtites: ${error}`);
  }
  if (res.status !== 200) {
    throw new Error(
      `In addRecipeToFavourtites: Request failed with ${res.status}`
    );
  }
  return res.data;
};

/**
 * To remove recipe from favourites
 */
export const removeRecipeFromFavourtites = async (recipeId) => {
  const { jwtAuthToken, userId } = getUserAuthData();
  let res;
  try {
    res = await axiosInstance.delete(
      `api/user/${userId}/favorite/${recipeId}?jwtAuthToken=${jwtAuthToken}`
    );
  } catch (error) {
    throw new Error(`In removeRecipeFromFavourtites: ${error}`);
  }
  if (res.status !== 200) {
    throw new Error(
      `In removeRecipeFromFavourtites: Request failed with ${res.status}`
    );
  }
  return res.data;
};
