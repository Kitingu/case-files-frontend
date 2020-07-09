import { SPINNER } from "../actionTypes/index";
import initialState from "../store/initialState";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SPINNER:
      return payload;
    default:
      return state;
  }
};
