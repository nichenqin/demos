const mongoose = require('mongoose');

before(done => {
  mongoose.connect('mongodb://localhost/muber_test');
  mongoose.connection
    .once('open', () => {
      console.log('connected to muber_test');
      done();
    })
    .on('error', (error) => { console.warn('warn', error); });
});

beforeEach(done => {
  const { drivers } = mongoose.connection.collections;
  drivers.drop()
    .then(() => { drivers.ensureIndex({ 'geometry.coordinates': '2dsphere' }); })
    .then(() => done())
    .catch(() => done());
});
