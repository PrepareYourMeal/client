import { store } from "../redux/store";
import * as _deepClone from "clone-deep";
import { ToastsStore } from "react-toasts";
import { logoutUser } from "../redux/actions";

export const logout = (navRef) => {
  // Clear other reducers data also
  store.dispatch(logoutUser());
  if (navRef) {
    navRef.replace("/home");
  }
};

export const deepClone = (data) => {
  return _deepClone(data);
};

export const sleepTime = (n) => new Promise((r) => setTimeout(() => r(), n));

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const showToast = (message, type = "error") => {
  ToastsStore[type](message, 4000);
};

export const extractQueryParams = (queryParamString) => {
  let params = {};
  if (queryParamString.length > 1 && queryParamString.indexOf("?") > -1) {
    queryParamString = queryParamString.replace("?", "");
    if (queryParamString.indexOf("&") === -1) {
      // Contains only one param
      const paramParts = queryParamString.split("=");
      params[paramParts[0]] = paramParts[1];
    } else {
      // Contains multiple params
      const queryParams = queryParamString.split("&");
      queryParams.forEach((queryParam) => {
        const paramParts = queryParam.split("=");
        params[paramParts[0]] = paramParts[1];
      });
    }
  }
  return params;
};
