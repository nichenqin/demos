import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = 'NICHENQIN1001';

export function fetchPosts() {
    const url = `${ROOT_URL}/posts?key=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export const CREATE_POST = 'CREATE_POST';

export function createPost(values, callback) {
    const url = `${ROOT_URL}/posts?key=${API_KEY}`;
    const request = axios.post(url, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export const FETCH_POST = 'FETCH_POST';

export function fetchPost(id) {
    const url = `${ROOT_URL}/posts/${id}?key=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_POST,
        payload: request
    };
}
