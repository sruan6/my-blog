const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../../config/keys');
const User = require('../../db/model/users');

const GoogleStrat = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
  },
  async (accessToken, refreshToken, profile, cb) => {
    console.log(profile);
    // Check if user exist in database
    const findUser = await User.findOne({ username: profile.id });
    if (!findUser) {
      // if User does not exist create user
      const user = await new User({
        username: profile.id,
        password: profile.password,
        displayName: profile.displayName,
        name: {
          first: profile.name.givenName,
          last: profile.name.familyName,
          middle: profile.name.middleName,
        },
        gender: profile.gender,
        profileUrl: profile.photos[0].value,
        provider: profile.provider,
      }).save();
      return cb(null, user);
    }
    return cb(null, findUser);
  }
);

module.exports = GoogleStrat;
