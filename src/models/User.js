const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  id: { type: Number, trim: true, required: true, unique: true },
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, trim: true, required: true }
});

userSchema.methods.encryptPwd = password => {
  const salt = bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.matchPwd = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Users', userSchema);
