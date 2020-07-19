const Spirit = require('../models/Spirit');

exports.newSpirit = async (req, res, next) => {
  const spirit = new Spirit(req.body);
  try {
    await spirit.save();
    res.json({ message: 'Spirit created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getSpirits = async (req, res, next) => {
  try {
    const spirits = await Spirit.find({}, { _id: 0, __v: 0 });
    res.json(spirits);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getSpirit = async (req, res, next) => {
  try {
    const spirit = await Spirit.findOne({ id: req.params.id }, { _id: 0, __v: 0 });
    res.json(spirit);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.putSpirit = async (req, res, next) => {
  try {
    const spirit = await Spirit.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(spirit);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteSpirit = async (req, res, next) => {
  try {
    await Spirit.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Spirit deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.formNewSpirit = (req, res) => {
  res.render('new/spirit', { pagina: 'New spirit | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};
