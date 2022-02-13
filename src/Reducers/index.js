import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import setAuthedUser from "./setAuthedUser";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  users,
  questions,
  setAuthedUser,
  loadingBar: loadingBarReducer,
});
