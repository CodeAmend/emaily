const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  user: keys.mongoUser,
  password: keys.mongoPass
}, a => {
  console.log(a);
});

const app = express();
authRoutes(app);

const port = process.env.PORT || 5000;
app.listen(port);
