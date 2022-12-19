import { SET_LOGGED_IN_USER } from 'data/actions/actionTypes';

export function setLoggedInUser(id) {
  return {
    type: SET_LOGGED_IN_USER,
    id
  };
}