const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const { ExtractJwt, Strategy } = require('passport-jwt');

// setup options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// create JWT strategy
const jwtLogin = new Strategy(jwtOptions, function (payload, done) {
  // see if the user id in the payload exists in our database
  // if it does, call 'done' with that other
  // otherwise, call done without a user object
  User.findById(payload.sub)
    .then(user => {
      user ? done(null, user) : done(null, false);
    })
    .catch(err => done(err, false));
});

// tell passport to use strategy
passport.use(jwtLogin);
