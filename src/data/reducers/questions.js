import { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER_TO_QUESTION } from 'data/actions/actionTypes';

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case SAVE_ANSWER_TO_QUESTION:
      const { questionId, option, userId } = action;
      const votesCopy = [...state[questionId][option].votes];
      votesCopy.push(userId);
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [option]: {
            ...state[questionId][option],
            votes: votesCopy
          }
        }
      };
    default:
      return state;
  }
}