const LocalStrategy = require('passport-local').Strategy;
const User = require('../../db/model/users');

const LocalStrat = new LocalStrategy(async (username, password, done) => {
  console.log(`username: ${username}, password: ${password}`);
  User.findOne({ username }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    if (!user.checkPassword(password)) {
      return done(null, false);
    }
    return done(null, user);
  });
});

module.exports = LocalStrat;
