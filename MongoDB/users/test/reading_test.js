const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('finds all users name of Joe', (done) => {
    // do not use the instance of User
    User.find({ name: 'Joe' })
      .then((user) => {
        console.log(user);
        done();
      });
  });
});
