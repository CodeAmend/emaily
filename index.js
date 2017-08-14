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


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

// This run before production middleware
routes(app);

// Production middleware
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



const port = process.env.PORT || 5000;
app.listen(port);
