import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default (state = {}, action) => {

    switch (action.type) {
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return (
                action.payload.data.reduce((targetObj, post) => {
                    targetObj[post.id] = post;
                    return targetObj;
                }, {})
            );
        default:
            return state;
    }
};
