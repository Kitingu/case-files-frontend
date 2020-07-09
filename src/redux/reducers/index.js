import { combineReducers } from "redux";
import error from "./error";
import spinner from "./spinner";
import auth from "./auth";
import registerReducer from '../reducers/auth/register'
export default combineReducers({
  error,
  spinner,
  auth,
  registerReducer
});
