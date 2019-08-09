const FacebookStrategy = require('passport-facebook').Strategy;
const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = require('../../config/keys');
const User = require('../../db/model/users');

const FacebookStrat = new FacebookStrategy(
  {
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: '/auth/facebook/callback',
  },
  async (accessToken, refreshToken, profile, cb) => {
    console.log(profile);
    // Check if User exists
    const findUser = await User.findOne({ username: profile.id });
    // If User does not exist
    if (!findUser) {
      // Create User
      const user = await new User({
        username: profile.id,
        password: 'none',
        displayName: profile.displayName,
        name: {
          first: profile.name.givenName,
          last: profile.name.familyName,
          middle: profile.name.middleName,
        },
        gender: profile.gender,
        profileUrl: profile.profileUrl,
        provider: profile.provider,
      }).save();
      // return User when done
      return cb(null, user);
    }
    // If User exist return User
    return cb(null, findUser);
  }
);

module.exports = FacebookStrat;
