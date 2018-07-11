const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  username: String,
  sub: String,
  updated: { type: Date, default: Date.now() },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = { UserModel, UserSchema };
