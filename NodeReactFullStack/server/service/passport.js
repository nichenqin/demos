const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ googleId: profile.id });
      if (!!user) {
        done(null, user);
      } else {
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: "/auth/github/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ githubID: profile.id });
      console.log(user);
      if (!!user) {
        done(null, user);
      } else {
        const user = await new User({ githubID: profile.id }).save();
        console.log(user);
        done(null, user);
      }
    }
  )
);
