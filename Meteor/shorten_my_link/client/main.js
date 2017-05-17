import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
