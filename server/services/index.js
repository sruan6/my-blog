const passport = require('passport');
const FacebookStrat = require('./passport/facebook');
const GoogleStrat = require('./passport/google');

// Facebook Login Strategy
passport.use(FacebookStrat);

passport.use(GoogleStrat);

module.exports = passport;
