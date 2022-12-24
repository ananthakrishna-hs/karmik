import { RECEIVE_USERS, SAVE_QUESTION_TO_USER } from 'data/actions/actionTypes';

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_QUESTION_TO_USER:
      const { loggedInUser, questionId } = action;
      const questionsCopy = [...state[loggedInUser].questions];
      questionsCopy.push(questionId);
      return {
        ...state,
        [action.loggedInUser]: {
          ...state[action.loggedInUser],
          questions: questionsCopy
        }
      }
    default:
      return state;
  }
}