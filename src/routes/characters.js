const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterControllers');

router.post('/', characterController.newCharacter);
router.get('/', characterController.getCharacters);
router.get('/:id', characterController.getCharacter);
router.put('/:id', characterController.putCharacter);
router.delete('/:id', characterController.deleteCharacter);

module.exports = router;
