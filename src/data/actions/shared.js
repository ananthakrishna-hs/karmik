import { getInitialData, _saveQuestion } from 'utils/_DATA';

import { receiveUsers, saveQuestionToUser } from 'data/actions/users';
import { receiveQuestions, saveQuestion } from 'data/actions/questions';

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