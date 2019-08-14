const mongoose = require('mongoose');
const { Schema } = require('mongoose');
// const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  uniqueid: String,
  title: String,
  profile_image: String,
  id_name: String,
  username: String,
  password: String,
  displayName: String,
  name: {
    first: String,
    last: String,
    middle: String,
  },
  gender: String,
  profileUrl: String,
  provider: String,
});

// userSchema.methods = {
//   checkPassword(inputPassword) {
//     return bcrypt.compareSync(inputPassword, this.password);
//   },
//   hashPassword(plainTextPassword) {
//     return bcrypt.hashSync(plainTextPassword, 10);
//   },
// };

module.exports = mongoose.model('users', userSchema);
