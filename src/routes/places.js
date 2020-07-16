const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeControllers');

router.post('/', placeController.newPlace);
router.get('/', placeController.getPlaces);
router.get('/:id', placeController.getPlace);
router.put('/:id', placeController.putPlace);
router.delete('/:id', placeController.deletePlace);
router.get('/new', placeController.formNewPlace);

module.exports = router;
