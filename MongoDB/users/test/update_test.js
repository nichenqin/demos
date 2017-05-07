const assert = require('assert');
const User = require('../src/user');

describe('Upadating records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe', likes: 1 });
    joe.save()
      .then(() => { done(); });
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name = 'Alex');
      });
    done();
  }

  // set and save
  it('instance type using set & save', (done) => {
    // set...
    joe.set('name', 'Alex');
    // ...and save
    assertName(joe.save(), done);
  });

  // instance update
  it('A model instance can update', (done) => {
    assertName(joe.update({ name: 'Alex' }), done);
  });

  // class base update
  it('A model class can update', (done) => {
    assertName(User.update({ name: 'Joe' }, { name: 'Alex' }), done);
  });

  it('A model class can update one record', (done) => {
    assertName(User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }), done);
  });

  it('A model class can update one record an Id and update', (done) => {
    assertName(User.findByIdAndUpdate(joe._id, { name: 'Alex' }), done);
  });

  it('A user can have their likes incremented by 1', (done) => {
    User.update({ name: 'Joe' }, { $inc: { likes: 1 } })
      .then(() => User.findOne({ name: 'Joe' }))
      .then(user => {
        assert(user.likes === 2);
        done();
      });
  });
});
