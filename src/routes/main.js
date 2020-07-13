const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { pagina: 'Avatar API', clase: 'without' });
});

router.get('/about', (req, res) => {
  res.render('about', { pagina: 'About | Avatar API' });
});

router.get('/docs', (req, res) => {
  res.render('docs', { pagina: 'Documentation | Avatar API' });
});

router.get('/api', (req, res) => {
  res.json({
    bendings: 'http://localhost:4000/api/bendings',
    characters: 'http://localhost:4000/api/characters',
    nations: 'http://localhost:4000/api/nations',
    places: 'http://localhost:4000/api/places'
  });
});

router.get('/signin', (req, res) => {
  res.render('sign-in', { pagina: 'Sign in | Avatar API', clase: 'text-center', clase2: 'no-footer' });
});

router.get('/user', (req, res) => {
  res.render('user', { pagina: 'User | Avatar API', clase: 'text-center', clase2: 'no-footer' });
});

router.use('/new', require('./new'));

module.exports = router;
