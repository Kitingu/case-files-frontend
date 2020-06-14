import { combineReducers } from "redux";
import error from "./error";
import spinner from "./spinner";
import auth from "./auth";
export default combineReducers({
  error,
  spinner,
  auth,
});
