import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/collections/players';
import App from './components/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    ReactDOM.render(<App players={players} />, document.getElementById('app'));
  });
});
