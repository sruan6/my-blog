const passport = require('passport');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  //   Facebook Login
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      authType: 'rerequest',
      scope: ['user_friends', 'manage_pages'],
    })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );
  // End of Facebook Login

  // Google Login
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile'] })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );
};
