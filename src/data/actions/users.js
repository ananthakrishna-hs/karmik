import { RECEIVE_USERS, SAVE_ANSWER, SAVE_QUESTION_TO_USER } from 'data/actions/actionTypes';

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

export function saveAnswerToUser(questionId, option, userId) {
  return {
    type: SAVE_ANSWER,
    questionId,
    option,
    userId
  };
}