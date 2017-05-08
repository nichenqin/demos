const mongoose = require('mongoose');

// use ES6 Promise instead of mongoose Promise
mongoose.Promise = global.Promise;

// only excuted one time
before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => {
      console.log('connected');
      done();
    })
    .on('error', error => { console.warn('warn', error); });
});

beforeEach((done) => {
  const { users, blogposts, comments } = mongoose.connection.collections;
  users.drop(() => {
    blogposts.drop(() => {
      comments.drop(() => {
        done();
      });
    });
  });
});
