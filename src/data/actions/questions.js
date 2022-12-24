import { RECEIVE_QUESTIONS, SAVE_ANSWER_TO_QUESTION, SAVE_QUESTION } from 'data/actions/actionTypes';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}

export function saveAnswerToQuestion(questionId, option, userId) {
  return {
    type: SAVE_ANSWER_TO_QUESTION,
    questionId,
    option,
    userId
  };
}