import { combineReducers } from 'redux';

import posts from './posts';
import auth from './authentiacation';

export default combineReducers({
    posts,
    auth
}); 
