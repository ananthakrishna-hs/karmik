import { getInitialData } from 'utils/_DATA';

import { receiveUsers } from 'data/actions/users';
import { receiveQuestions } from 'data/actions/questions';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({users, questions}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    })
  }
}