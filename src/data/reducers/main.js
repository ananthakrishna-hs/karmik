import { combineReducers } from 'redux';

import users from 'data/reducers/users';
import questions from 'data/reducers/questions';
import loggedInUser from 'data/reducers/loggedInUser';

export default combineReducers({
  users,
  questions,
  loggedInUser
});
