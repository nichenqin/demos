import { CREATE_POST, TOGGLE_AUTH } from './types';

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
