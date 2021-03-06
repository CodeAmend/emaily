const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate(
      // This keyword is specific to GoogleStrategy
      'google',
      {
        // Google has a list of specific scopes we can ask for
        scope: ['profile', 'email']
      }
    )
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys')
    }
  );

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/')
  });

};
