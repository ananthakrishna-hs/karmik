import { RECEIVE_USERS, SAVE_QUESTION_TO_USER, SAVE_ANSWER } from 'data/actions/actionTypes';

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
        [loggedInUser]: {
          ...state[loggedInUser],
          questions: questionsCopy
        }
      }
    case SAVE_ANSWER:
      const { option, userId } = action;
      const qid = action.questionId;

      return {
        ...state,
        [userId]: {
          ...state[userId],
          answers: {
            ...state[userId].answers,
            [qid]: option
          }
        }
      };
    default:
      return state;
  }
}