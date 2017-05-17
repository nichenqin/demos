// only excuted on server
import _ from 'lodash';
import { image, helpers } from 'faker';
import { Meteor } from 'meteor/meteor';
import { EmployeesCollection } from '../imports/collections/employees';

Meteor.startup(() => {
  // check if record exists
  const numberRecords = EmployeesCollection.find({}).count();
  if (!numberRecords) {
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();
      const avatar = image.avatar();

      EmployeesCollection.insert({ name, email, phone, avatar });
    });
  }

  Meteor.publish('employees', (per_page) => EmployeesCollection.find({}, { limit: per_page }));
});
