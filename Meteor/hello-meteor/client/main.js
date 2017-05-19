import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/collections/players';
import { calcRank } from '../imports/collections/players';
import App from './components/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({}, { sort: { score: -1 } }).fetch();
    const rankedPlayers = calcRank(players);
    ReactDOM.render(<App players={rankedPlayers} />, document.getElementById('app'));
  });
});
