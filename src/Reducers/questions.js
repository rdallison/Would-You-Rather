import { SET_QUESTIONS } from "../Actions/setQuestions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
