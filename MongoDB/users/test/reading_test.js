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
      .then((users) => {
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });

  it('find a user with a paticular _id', (done) => {
    User.findOne({ _id: joe._id })
      .then((user) => {
        assert(user.name === 'Joe');
        done();
      });
  });

});