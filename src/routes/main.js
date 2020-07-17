const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');
const { isAuth } = require('../helpers/auth');

router.get('/', mainController.renderHome);
router.get('/about', mainController.renderAbout);
router.get('/docs', mainController.renderDocs);
router.get('/api', mainController.getApi);
router.get('/user/sign-in', mainController.renderSignIn);
router.post('/user/signIn', mainController.signIn);
router.get('/user/sign-out', mainController.signOut);
router.get('/user', isAuth, mainController.renderUser);
router.use('/new-image', isAuth, mainController.formNewImage);
// Temporal route
// router.post('/user/signUp', mainController.signUp);

module.exports = router;
