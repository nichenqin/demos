import { combineReducers } from 'redux';
import BooksReducer from './reducer_boos';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
