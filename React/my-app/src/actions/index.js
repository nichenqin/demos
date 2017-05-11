import CREATE_POST from './types';

export function creatPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    };
}
