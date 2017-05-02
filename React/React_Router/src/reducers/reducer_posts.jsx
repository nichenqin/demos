import { FETCH_POSTS, CREATE_POST } from '../actions/index';

export default (state = {}, action) => {

    switch (action.type) {
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
