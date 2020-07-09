import { LOGIN_SUCCESS } from "../../actionTypes/index";
import initialState from "../../store/initialState";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return payload;
    default:
      return state;
  }
};
