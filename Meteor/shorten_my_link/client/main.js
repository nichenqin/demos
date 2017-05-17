import React from 'react';
import ReactDOM from 'react-dom';
import { LinkCollection } from '../imports/collections/links';

import App from './pages/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
