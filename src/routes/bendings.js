const express = require('express');
const router = express.Router();
const bendingController = require('../controllers/bendingControllers');
const { isAuth } = require('../helpers/auth');

// Render forms
router.get('/new', isAuth, bendingController.formNewBending);

router.post('/new-bending', isAuth, bendingController.newBending);
router.get('/', bendingController.getBendings);
router.get('/:id', bendingController.getBending);
router.put('/:id', isAuth, bendingController.putBending);
router.delete('/:id', isAuth, bendingController.deleteBending);

module.exports = router;
