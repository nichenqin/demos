import axios from 'axios';
import { AUTH_USER } from './types';

const ROOT_URL = `http://localhost:3090`;

export function signinUser({ email, password }, history) {
  return dispatch => {
    // submit email and password to server
    const url = `${ROOT_URL}/signin`;
    axios.post(url, { email, password })
      .then(response => {
        // if request is good
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the jwt token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature
        history.push('/');
      })
      .catch();


    // if request is bad
    // s- how error to the user
  };
}