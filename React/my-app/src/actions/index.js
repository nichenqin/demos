import { CREATE_POST, TOGGLE_AUTH, FETCH_USERS } from './types';

export function creatPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}

export function toggleAuth(isLoggedIn) {
  return {
    type: TOGGLE_AUTH,
    payload: isLoggedIn
  };
}

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Joe' },
      { name: 'Alex' },
      { name: 'Jimmy' }
    ]
  };
}
