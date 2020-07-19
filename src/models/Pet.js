const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petsSchema = new Schema({
  id: { type: Number, trim: true, required: true, unique: true },
  name: { type: String, trim: true, required: true },
  typeAnimal: { type: String, trim: true, required: true },
  position: { type: Object, trim: true },
  image: { type: String, trim: true, required: true }
});

module.exports = mongoose.model('Pets', petsSchema);
