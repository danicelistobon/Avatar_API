const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bendingsSchema = new Schema({
  name: { type: String, trim: true },
  description: { type: String, trim: true },
  image: { type: String, trim: true }
});

module.exports = mongoose.model('Bendings', bendingsSchema);
