import { ERROR, SPINNER } from "../actionTypes/index";

export const setError = (data, dispatch) =>
  dispatch({
    type: ERROR,
    payload: data,
  });
export const setSpinner = (data, dispatch) =>
  dispatch({
    type: SPINNER,
    payload: data,
  });
