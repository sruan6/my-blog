const passport = require('passport');
const FacebookStrat = require('./passport/facebook');
const GoogleStrat = require('./passport/google');
const LocalStrat = require('./passport/local');
const User = require('../db/model/users');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});

// Facebook Login Strategy
passport.use(FacebookStrat);

// Google Login Strategy
passport.use(GoogleStrat);

// Local Login Strategy
passport.use(LocalStrat);

module.exports = passport;
