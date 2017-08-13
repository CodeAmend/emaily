const authRoutes = require('./authRoutes');
const billingRoutes = require('./billingRoutes');

module.exports = app => {
  authRoutes(app);
  billingRoutes(app);
}
