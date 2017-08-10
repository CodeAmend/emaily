const express = require('express');
const passport = require('passprt');
const GoogleStrategy = require('passport-google-oauth20').GoogleStrategy;


const app = express();

passport.use(new GoogleStrategy());

const port = process.env.PORT || 5000;

app.listen(port);
