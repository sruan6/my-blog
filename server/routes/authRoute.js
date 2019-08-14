const passport = require('passport');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  //   Facebook Login
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
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
  // End of Google Login

  // Local Login
  app.post(
    '/auth/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    }
  );
  app.get('/api/user', (req, res) => {
    res.send(req.user);
  });

  app.get('/auth/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
