const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  id: { type: Number, trim: true, required: true, unique: true },
  name: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
  nation: { type: Object, trim: true, required: true },
  image: { type: String, trim: true, required: true }
});

module.exports = mongoose.model('Places', placesSchema);
