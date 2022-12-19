import { RECEIVE_USERS } from 'data/actions/actionTypes';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}