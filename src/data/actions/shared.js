import { getInitialData } from 'utils/_DATA';

import { receiveUsers } from 'data/actions/users';
import { receiveQuestions } from 'data/actions/questions';
import { setLoggedInUser } from 'data/actions/loggedInUser'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({users, questions}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setLoggedInUser('tylermcginnis'));
    })
  }
}