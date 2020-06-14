import { ERROR } from "../actionTypes/index";
import initialState from "../store/initialState";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ERROR:
      return payload;
    default:
      return state;
  }
};
