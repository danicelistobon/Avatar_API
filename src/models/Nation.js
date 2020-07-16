const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nationsSchema = new Schema({
  id: { type: Number, trim: true, required: true, unique: true },
  name: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
  mapImage: { type: String, trim: true, required: true },
  capital: { type: String, trim: true },
  headState: { type: String, trim: true },
  currency: { type: String, trim: true },
  description: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true }
});

module.exports = mongoose.model('Nations', nationsSchema);
