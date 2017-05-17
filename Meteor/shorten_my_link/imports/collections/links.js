import { Mongo } from 'meteor/mongo';
import { isUri } from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'links.insert': url => {
    check(url, Match.Where(url => isUri(url)));
  }
});

export const LinkCollection = new Mongo.Collection('links');
