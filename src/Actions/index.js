import setAuthedUser from "./setAuthedUser";
import setUsers from "./setUsers";
import setQuestions from "./setQuestions";
import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(setUsers(users));
      dispatch(setQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
