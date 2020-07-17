const express = require('express');
const router = express.Router();
const nationController = require('../controllers/nationControllers');
const { isAuth } = require('../helpers/auth');

// Render forms
router.get('/new', isAuth, nationController.formNewNation);

router.post('/new-nation', isAuth, nationController.newNation);
router.get('/', nationController.getNations);
router.get('/:id', nationController.getNation);
router.put('/:id', isAuth, nationController.putNation);
router.delete('/:id', isAuth, nationController.deleteNation);

module.exports = router;
