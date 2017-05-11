import { CREATE_POST } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case CREATE_POST:
            return [...state, action.payload]

        default:
            return state;
    }
}
