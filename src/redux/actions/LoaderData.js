import * as types from "./ActionTypes";

const INITIAL_STATE = false;


export const showLoader = (state = INITIAL_STATE, loaderText = 'Loading', action) => {
    return {
        type: types.SHOW_LOADER,
        action: types.SHOW_LOADER,
        payload: {
            loaderText
        }
    }
}

export const hideLoader = () => {
    return {
        type: types.HIDE_LOADER,
        action: types.HIDE_LOADER,
    }
}