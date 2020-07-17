const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeControllers');
const { isAuth } = require('../helpers/auth');

// Render forms
router.get('/new', isAuth, placeController.formNewPlace);

router.post('/new-place', isAuth, placeController.newPlace);
router.get('/', placeController.getPlaces);
router.get('/:id', placeController.getPlace);
router.put('/:id', isAuth, placeController.putPlace);
router.delete('/:id', isAuth, placeController.deletePlace);

module.exports = router;
