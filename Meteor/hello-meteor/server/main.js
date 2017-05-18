import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/collections/players';

Meteor.startup(() => {
  Players.insert({
    name: 'zelda',
    score: 99
  });
  console.log(Players.find().fetch());
});
