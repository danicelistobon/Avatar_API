const Bending = require('../models/Bending');

exports.newBending = async (req, res, next) => {
  // crear obj bending con datos de req.body
  const bending = new Bending(req.body);
  try {
    await bending.save();
    res.json({ mensaje: 'Bending created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getBendings = async (req, res, next) => {
  try {
    const bendings = await Bending.find({});
    res.json(bendings);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getBending = async (req, res, next) => {
  try {
    const bending = await Bending.findById(req.params.id);
    res.json(bending);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.putBending = async (req, res, next) => {
  try {
    const bending = await Bending.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(bending);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteBending = async (req, res, next) => {
  try {
    await Bending.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: 'Bending deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.formNewBending = (req, res) => {
  res.render('new/bending', { pagina: 'New bending | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};
