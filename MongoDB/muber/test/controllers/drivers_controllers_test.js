const mongoose = require('mongoose');
const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

const Driver = mongoose.model('driver');

describe('Drivers Controller', () => {
  it('Post to /api/drivers creates a new driver', (done) => {
    Driver.count()
      .then(count => {
        request(app)
          .post('/api/drivers')
          .send({ email: 'test@test.com' })
          .end(() => {
            Driver.count()
              .then(newCount => {
                assert(count + 1 === newCount);
                done();
              });
          });
      });
  });

  it('Put to /api/drivers/:id edits an existing driver', done => {
    const driver = new Driver({ email: 'put@test.com', driving: false });
    driver.save()
      .then(() => {
        request(app)
          .put(`/api/drivers/${driver._id}`)
          .send({ driving: true })
          .end(() => {
            Driver.findOne({ email: 'put@test.com' })
              .then(driver => {
                assert(driver.driving);
                done();
              });
          });
      });
  });

  it('Remove a driver with id', done => {
    const driver = new Driver({ email: 'delete@test.com' });

    driver.save()
      .then(() => {
        request(app)
          .delete(`/api/drivers/${driver._id}`)
          .end(() => {
            Driver.findOne({ email: 'delete@test.com' })
              .then(driver => {
                assert(driver === null);
                done();
              });
          });
      });
  });
});
