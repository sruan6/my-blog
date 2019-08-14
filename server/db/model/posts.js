const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const postSchema = new Schema({
  uniqueid: String,
  title: String,
  profile_image: String,
});

module.exports = mongoose.model('post', postSchema);
