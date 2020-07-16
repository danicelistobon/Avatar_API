const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');

router.get('/', mainController.renderHome);
router.get('/about', mainController.renderAbout);
router.get('/docs', mainController.renderDocs);
router.get('/api', mainController.getApi);
router.get('/signin', mainController.renderSignin);
router.get('/user', mainController.renderUser);
router.use('/new-image', mainController.formNewImage);

module.exports = router;
