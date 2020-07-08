const express = require('express');
const router = express.Router();
const nationController = require('../controllers/nationControllers');

router.post('/', nationController.newNation);
router.get('/', nationController.getNations);
router.get('/:id', nationController.getNation);
router.put('/:id', nationController.putNation);
router.delete('/:id', nationController.deleteNation);

module.exports = router;
