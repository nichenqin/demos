import { Mongo } from 'meteor/mongo';
import { isUri } from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'links.insert': url => {
    check(url, Match.Where(url => isUri(url)));

    const token = Math.random().toString(36).slice(-5);
    LinkCollection.insert({ url, token, clicks: 0 });
  }
});

export const LinkCollection = new Mongo.Collection('links');
