const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const companySchema = new Schema({
  name: String,
  headquarter: String,
  founded: Number,
});

module.exports = mongoose.model('companys', companySchema);
