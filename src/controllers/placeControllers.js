const Place = require('../models/Place');

exports.newPlace = async (req, res, next) => {
  const place = new Place(req.body);
  try {
    await place.save();
    res.json({ message: 'Place created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getPlaces = async (req, res, next) => {
  try {
    const places = await Place.find({}, { _id: 0, __v: 0 });
    res.json(places);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getPlace = async (req, res, next) => {
  try {
    const place = await Place.findOne({ id: req.params.id }, { _id: 0, __v: 0 });
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
    res.json({ message: 'Place deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.formNewPlace = (req, res) => {
  res.render('new/place', { pagina: 'New place | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};
