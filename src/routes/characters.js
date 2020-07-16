const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterControllers');

// Render forms
router.get('/new', characterController.formNewCharacter);

router.post('/new-character', characterController.newCharacter);
router.get('/', characterController.getCharacters);
router.get('/:id', characterController.getCharacter);
router.put('/:id', characterController.putCharacter);
router.delete('/:id', characterController.deleteCharacter);

module.exports = router;
