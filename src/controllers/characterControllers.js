const Character = require('../models/Character');

exports.newCharacter = async (req, res, next) => {
  const character = new Character(req.body);
  try {
    await character.save();
    res.json({ message: 'Character created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getCharacters = async (req, res, next) => {
  try {
    const characters = await Character.find({}, { _id: 0, __v: 0 });
    res.json(characters);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getCharacter = async (req, res, next) => {
  try {
    const character = await Character.findOne({ id: req.params.id }, { _id: 0, __v: 0 });
    res.json(character);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.putCharacter = async (req, res, next) => {
  try {
    const character = await Character.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(character);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteCharacter = async (req, res, next) => {
  try {
    await Character.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Character deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.formNewCharacter = (req, res) => {
  res.render('new/character', { pagina: 'New character | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};
