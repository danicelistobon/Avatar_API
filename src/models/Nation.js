const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nationsSchema = new Schema({
  name: { type: String, trim: true },
  location: { type: String, trim: true },
  mapImage: { type: String, trim: true },
  capital: { type: String, trim: true },
  headState: { type: String, trim: true },
  currency: { type: String, trim: true },
  description: { type: String, trim: true },
  image: { type: String, trim: true }
});

module.exports = mongoose.model('Nations', nationsSchema);
