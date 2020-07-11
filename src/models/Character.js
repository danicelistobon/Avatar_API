const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charactersSchema = new Schema({
  name: { type: String, trim: true },
  ethnicity: { type: Object, trim: true },
  nationality: { type: Object, trim: true },
  age: { type: String, trim: true },
  born: { type: String, trim: true },
  gender: { type: String, trim: true },
  bending: { type: Array, trim: true },
  image: { type: String, trim: true }
});

module.exports = mongoose.model('Characters', charactersSchema);
