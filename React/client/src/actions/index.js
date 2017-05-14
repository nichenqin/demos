import axios from 'axios';

const ROOT_URL = `http://localhost:3090`;

export function signinUser({ email, password }) {
  return dispatch => {
    // submit email and password to server
    const url = `${ROOT_URL}/signin`;
    axios.post(url, { email, password });
    // if request is good
    // - Update state to indicate user is authenticated
    // - Save the jwt token
    // - redirect to the route '/feature

    // if request is bad
    // s- how error to the user
  };
}
