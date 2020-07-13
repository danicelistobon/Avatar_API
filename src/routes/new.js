const express = require('express');
const router = express.Router();

router.get('/image', (req, res) => {
  res.render('new/image', { pagina: 'New image | Avatar API', clase: 'text-center', clase2: 'no-footer' });
});

router.get('/bending', (req, res) => {
  res.render('new/bending', { pagina: 'New bending | Avatar API', clase: 'text-center', clase2: 'no-footer' });
});

router.get('/character', (req, res) => {
  res.render('new/character', { pagina: 'New character | Avatar API', clase: 'text-center', clase2: 'no-footer' });
});

router.get('/nation', (req, res) => {
  res.render('new/nation', { pagina: 'New nation | Avatar API', clase: 'text-center', clase2: 'no-footer' });
});

router.get('/place', (req, res) => {
  res.render('new/place', { pagina: 'New place | Avatar API', clase: 'text-center', clase2: 'no-footer' });
});

module.exports = router;
