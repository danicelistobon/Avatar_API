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
  res.send({
    bendings: 'http://localhost:4000/api/bendings',
    characters: 'http://localhost:4000/api/characters',
    nations: 'http://localhost:4000/api/nations',
    places: 'http://localhost:4000/api/places'
  });
});

module.exports = router;
