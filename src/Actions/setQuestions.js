export const SET_QUESTIONS = "SET_QUESTIONS";

export default function setQuestion(questions) {
  return {
    type: SET_QUESTIONS,
    questions,
  };
}
