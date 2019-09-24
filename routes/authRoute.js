const passport = require('passport');
const User = require('../db/model/users');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  //   Facebook Login
  app.get(
    '/auth/facebook',
    passport.authenticate(
      'facebook',
      { authType: 'reauthenticate', scope: ['email', 'user_friends'] },
      { failureRedirect: '/login' }
    )
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );
  // End of Facebook Login

  // Google Login
  app.get(
    '/auth/google',
    passport.authenticate(
      'google',
      { scope: ['email', 'profile'], prompt: 'select_account' },
      { failureRedirect: '/login' }
    )
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );
  // End of Google Login

  // Local Login
  app.post('/auth/signup', async (req, res, next) => {
    const { body } = req;
    const { email } = body;
    const { username } = body;
    const { password1 } = body;
    console.log(username, password1);
    const usernameExist = await User.findOne({ username });
    if (!usernameExist) {
      // const user = await new User({
      //   email,
      //   username,
      //   password: password1,
      // }).save();
      const user = await new User();
      user.email = email;
      user.username = username;
      user.password = user.hashPassword(password1);
      user.save();

      req.logIn(user, err => {
        if (err) {
          return next(err);
        }
        if (user) {
          res.redirect('/');
        }
      });
    }
    res.send('User exist');
  });

  app.post('/auth/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.redirect('/login');
      }
      req.logIn(user, err => {
        if (err) {
          return next(err);
        }
        if (user) {
          res.redirect('/');
        }
      });
    })(req, res, next);
  });

  app.get('/api/user', (req, res) => {
    res.send(req.user);
  });

  app.get('/auth/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
