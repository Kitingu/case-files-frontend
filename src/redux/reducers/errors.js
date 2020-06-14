import { ERRORS } from "../actionTypes/index";
import initialState from "../store/initialState";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ERRORS:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};
