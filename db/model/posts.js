const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const postSchema = new Schema({
  uniqueid: String,
  profile_image: String,
  title: String,
  genre: String,
  rating: String,
  diffculty: Number,
  created: String,
  dateString: String,
});

module.exports = mongoose.model('posts', postSchema);
