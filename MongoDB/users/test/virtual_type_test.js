const assert = require('assert');
const User = require('../src/user');

describe('Virtual Types', () => {
  it('postCounts return number of posts', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'newPost' }]
    });

    joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        user.posts.push({ title: 'another post' });
        return user.save();
      })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.postCount === 2);
        done();
      });
  });
});
