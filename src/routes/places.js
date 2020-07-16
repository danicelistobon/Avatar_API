const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeControllers');

// Render forms
router.get('/new', placeController.formNewPlace);

router.post('/new-place', placeController.newPlace);
router.get('/', placeController.getPlaces);
router.get('/:id', placeController.getPlace);
router.put('/:id', placeController.putPlace);
router.delete('/:id', placeController.deletePlace);

module.exports = router;
