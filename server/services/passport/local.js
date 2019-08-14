const LocalStrategy = require('passport-local').Strategy;
const User = require('../../db/model/users');

const LocalStrat = new LocalStrategy(async (username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    if (!user.verifyPassword(password)) {
      return done(null, false);
    }
    return done(null, user);
  });
});

module.exports = LocalStrat;
