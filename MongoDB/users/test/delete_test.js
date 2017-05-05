const assert = require('assert');
const User = require('../src/user');

describe('Delete a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => { done(); });
  });

  // use joe instance
  it('model instance remove', (done) => {
    // remove data with model instance
    joe.remove()
      // called once remove method completed
      .then(() => { User.findOne({ name: 'Joe' }); })
      // called after first then function completed
      .then((user) => {
        assert(!user);
        done();
      });
  });

  // use User class
  it('class method remove', (done) => {
    User.remove({ name: 'Joe' })
      .then(() => { User.findOne({ name: 'Joe' }); })
      // called after first then function completed
      .then((user) => {
        assert(!user);
        done();
      });
  });

  it('class method findOneAndRemove', (done) => {
    User.findOneAndRemove({ name: 'Joe' })
      .then(() => { User.findOne({ name: 'Joe' }); })
      // called after first then function completed
      .then((user) => {
        assert(!user);
        done();
      });
  });

  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndRemove(joe._id)
      .then(() => { User.findOne({ name: 'Joe' }); })
      // called after first then function completed
      .then((user) => {
        assert(!user);
        done();
      });
  });

});
