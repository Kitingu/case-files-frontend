import { LOGIN_SUCCESS, ERROR } from "../../actionTypes/index";
import apiCall from "../../../utils/api";
import { storeToken } from "../../../utils/authHelper";
import { setError, setSpinner } from "../shared";

export const login = (data) => async (dispatch) => {
  try {
    setSpinner(true, dispatch);
    const res = await apiCall.post("/auth/login", data);
    storeToken(res.data.data["x-access-token"]);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
    setSpinner(false, dispatch);
  } catch (error) {
    setError(error.response, dispatch);
    setSpinner(false, dispatch);
  }
};
