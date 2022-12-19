import { SET_LOGGED_IN_USER } from 'data/actions/actionTypes';

export default function loggedInUser(state = null, action) {
  switch(action.type) {
    case SET_LOGGED_IN_USER:
      return action.id;
    default:
      return state;
  }
}