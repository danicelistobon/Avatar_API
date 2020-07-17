const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterControllers');
const { isAuth } = require('../helpers/auth');

// Render forms
router.get('/new', isAuth, characterController.formNewCharacter);

router.post('/new-character', isAuth, characterController.newCharacter);
router.get('/', characterController.getCharacters);
router.get('/:id', characterController.getCharacter);
router.put('/:id', isAuth, characterController.putCharacter);
router.delete('/:id', isAuth, characterController.deleteCharacter);

module.exports = router;
