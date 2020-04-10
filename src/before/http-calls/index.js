import { BASE_URL } from '../config/index';
import { makeGetRequest } from '../http-connectors';

export const fetchRecipes = () => {
  return new Promise((resolve, reject) => {
    makeGetRequest(
      BASE_URL + "/recipes",
      false
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        console.log("API call error: ", e);
        reject(e);
      });
  });
};
