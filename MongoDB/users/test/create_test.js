const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
  it('saves a user', (done) => {
    // create a new instance of User
    // which is not a simple Object
    const joe = new User({ name: 'Joe' });
    // save the new instance into database
    // save a model
    joe.save()
      .then(() => {
        assert(!joe.isNew);
        done();
      });
  });
});
