const express = require('express');
const router = express.Router();
const bendingController = require('../controllers/bendingControllers');

router.post('/', bendingController.newBending);
router.get('/', bendingController.getBendings);
router.get('/:id', bendingController.getBending);
router.put('/:id', bendingController.putBending);
router.delete('/:id', bendingController.deleteBending);

module.exports = router;
