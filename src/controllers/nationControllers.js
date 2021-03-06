const Nation = require('../models/Nation');

exports.newNation = async (req, res, next) => {
  const nation = new Nation(req.body);
  try {
    await nation.save();
    res.json({ message: 'Nation created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getNations = async (req, res, next) => {
  try {
    const nations = await Nation.find({}, { _id: 0, __v: 0 });
    res.json(nations);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getNation = async (req, res, next) => {
  try {
    const nation = await Nation.findOne({ id: req.params.id }, { _id: 0, __v: 0 });
    res.json(nation);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.putNation = async (req, res, next) => {
  try {
    const nation = await Nation.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(nation);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteNation = async (req, res, next) => {
  try {
    await Nation.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Nation deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.formNewNation = (req, res) => {
  res.render('new/nation', { pagina: 'New nation | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};
