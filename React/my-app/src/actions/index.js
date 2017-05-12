import axios from 'axios';
import { CREATE_POST, TOGGLE_AUTH, FETCH_USERS } from './types';

const URL_ROOT = `http://jsonplaceholder.typicode.com`;

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
  const request = axios.get(`${URL_ROOT}/users`);

  return {
    type: FETCH_USERS,
    payload: request
  };
}
