const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charactersSchema = new Schema({
  id: { type: Number, trim: true, required: true, unique: true },
  name: { type: String, trim: true, required: true },
  ethnicity: { type: Object, trim: true, required: true },
  nationality: { type: Object, trim: true },
  age: { type: String, trim: true },
  born: { type: String, trim: true },
  gender: { type: String, trim: true, required: true },
  bending: { type: Array, trim: true },
  image: { type: String, trim: true, required: true }
});

module.exports = mongoose.model('Characters', charactersSchema);
