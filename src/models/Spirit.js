const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spiritsSchema = new Schema({
  id: { type: Number, trim: true, required: true, unique: true },
  name: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true }
});

module.exports = mongoose.model('Spirits', spiritsSchema);
