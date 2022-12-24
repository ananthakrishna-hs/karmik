import { getInitialData, _saveQuestion, _saveQuestionAnswer } from 'utils/_DATA';

import { receiveUsers, saveQuestionToUser, saveAnswerToUser } from 'data/actions/users';
import { receiveQuestions, saveQuestion, saveAnswerToQuestion } from 'data/actions/questions';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({users, questions}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    })
  }
}

export function handleSaveQuestion(question, callback = null) {
  return (dispatch, getState) => {
    const { loggedInUser } = getState();

    return _saveQuestion({
      author: loggedInUser,
      optionOneText: question.firstOption,
      optionTwoText: question.secondOption
    }).then(question => {
      dispatch(saveQuestion(question));
      dispatch(saveQuestionToUser(question.id, loggedInUser));

      if (callback && typeof callback === 'function') {
        callback();
      }
    });
  };
}

export function handleSaveAnswer(questionId, option) {
  return (dispatch, getState) => {
    const { loggedInUser } = getState();

    return _saveQuestionAnswer({
      authedUser: loggedInUser,
      qid: questionId,
      answer: option
    }).then(response => {
      if (response) {
        dispatch(saveAnswerToQuestion(questionId, option, loggedInUser));
        dispatch(saveAnswerToUser(questionId, option, loggedInUser));
      }
    })
  }
}