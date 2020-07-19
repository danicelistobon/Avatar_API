const Pet = require('../models/Pet');

exports.newPet = async (req, res, next) => {
  const pet = new Pet(req.body);
  try {
    await pet.save();
    res.json({ message: 'Pet created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getPets = async (req, res, next) => {
  try {
    const pets = await Pet.find({}, { _id: 0, __v: 0 });
    res.json(pets);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getPet = async (req, res, next) => {
  try {
    const pet = await Pet.findOne({ id: req.params.id }, { _id: 0, __v: 0 });
    res.json(pet);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.putPet = async (req, res, next) => {
  try {
    const pet = await Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(pet);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deletePet = async (req, res, next) => {
  try {
    await Pet.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Pet deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.formNewPet = (req, res) => {
  res.render('new/pet', { pagina: 'New pet | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};
