const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log('access: ', accessToken);
      // console.log('refresh: ', refreshToken);
      // console.log('profile: ', profile);
      // console.log('done: ', done);
      User.findOne({ googleID: profile.id })
        .then( existingUser => {
          if (existingUser) {
            console.log("User exists!!");
          } else {
            console.log("New user saved to db");
            new User({ googleID: profile.id }).save();
          }
        })
    }
  )
);
