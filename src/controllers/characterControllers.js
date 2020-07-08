const Character = require('../models/Character');

exports.newCharacter = async (req, res, next) => {
  const character = new Character(req.body);
  try {
    await character.save();
    res.json({ mensaje: 'Character created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getCharacters = async (req, res, next) => {
  try {
    const characters = await Character.find({});
    res.json(characters);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getCharacter = async (req, res, next) => {
  try {
    const character = await Character.findById(req.params.id);
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
    res.json({ mensaje: 'Character deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};
