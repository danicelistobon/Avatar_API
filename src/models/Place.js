const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  nation: {
    type: Object,
    trim: true
  },
  image: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Places', placesSchema);
