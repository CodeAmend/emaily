const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
const routes = require('./routes');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  user: keys.mongoUser,
  password: keys.mongoPass
});

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

routes(app);

const port = process.env.PORT || 5000;
app.listen(port);
