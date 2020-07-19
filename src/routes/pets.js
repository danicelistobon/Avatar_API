const express = require('express');
const router = express.Router();
const petController = require('../controllers/petControllers');
const { isAuth } = require('../helpers/auth');

// Render forms
router.get('/new', isAuth, petController.formNewPet);

router.post('/new-pet', isAuth, petController.newPet);
router.get('/', petController.getPets);
router.get('/:id', petController.getPet);
router.put('/:id', isAuth, petController.putPet);
router.delete('/:id', isAuth, petController.deletePet);

module.exports = router;
