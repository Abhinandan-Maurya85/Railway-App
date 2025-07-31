const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  project: String,
  email: String,
  phone: String,
  college: String,
  branch: String,
  period: String,
  timeSlot: String,
  password: String,
  photo: String, // base64 or file path
  uniqueId: String,
});

module.exports = mongoose.model('User', userSchema);
