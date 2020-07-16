const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  id: { type: Number, trim: true, required: true, unique: true },
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true }
});

userSchema.methods.encryptPwd = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPwd = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Users', userSchema);
