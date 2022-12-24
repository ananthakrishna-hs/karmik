import { RECEIVE_USERS, SAVE_QUESTION_TO_USER } from 'data/actions/actionTypes';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function saveQuestionToUser(questionId, loggedInUser) {
  return {
    type: SAVE_QUESTION_TO_USER,
    questionId,
    loggedInUser
  }
}