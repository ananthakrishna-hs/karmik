import { RECEIVE_QUESTIONS, SAVE_QUESTION } from 'data/actions/actionTypes';

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