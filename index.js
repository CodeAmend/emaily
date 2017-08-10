const express = require('express');
const authRoutes = require('./routes/authRoutes');
require('./services/passport');

const app = express();
authRoutes(app);

const port = process.env.PORT || 5000;
app.listen(port);
