const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const imageSchema = new Schema({
  id: String,
  filename: String,
});

module.exports = mongoose.model('imagess', imageSchema);
