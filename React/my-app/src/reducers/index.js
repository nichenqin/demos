import { combineReducers } from 'redux';

import posts from './posts';
import auth from './authentiacation';
import users from './users';

export default combineReducers({
  posts,
  auth,
  users
}); 
