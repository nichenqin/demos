const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const { ExtractJwt, Strategy } = require('passport-jwt');
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  User.findOne({ email })
    .then(user => {
      if (!user) return done(null, false);

      user.comparePassword(password)
        .then(isMatch => done(null, isMatch ? user : false))
        .catch(err => done(err));
    })
    .catch(err => done(err));
});

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
    .then(user => { done(null, user || false); })
    .catch(err => done(err, false));
});

// tell passport to use strategy
passport.use(jwtLogin);
passport.use(localLogin);
