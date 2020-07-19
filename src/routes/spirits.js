const express = require('express');
const router = express.Router();
const spiritController = require('../controllers/spiritControllers');
const { isAuth } = require('../helpers/auth');

// Render forms
router.get('/new', isAuth, spiritController.formNewSpirit);

router.post('/new-spirit', isAuth, spiritController.newSpirit);
router.get('/', spiritController.getSpirits);
router.get('/:id', spiritController.getSpirit);
router.put('/:id', isAuth, spiritController.putSpirit);
router.delete('/:id', isAuth, spiritController.deleteSpirit);

module.exports = router;
