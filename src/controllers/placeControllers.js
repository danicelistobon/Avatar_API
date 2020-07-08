const Place = require('../models/Place');

exports.newPlace = async (req, res, next) => {
  const place = new Place(req.body);
  try {
    await place.save();
    res.json({ mensaje: 'Place created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getPlaces = async (req, res, next) => {
  try {
    const places = await Place.find({});
    res.json(places);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getPlace = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);
    res.json(place);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.putPlace = async (req, res, next) => {
  try {
    const place = await Place.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(place);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deletePlace = async (req, res, next) => {
  try {
    await Place.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: 'Place deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};
