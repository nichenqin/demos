import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default (state = {}, action) => {

    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
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
