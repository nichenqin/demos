import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import Async from './middlewares/async';

import Routes from './route.jsx';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
