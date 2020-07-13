const express = require('express');
const router = express.Router();

router.get('/image', (req, res) => {
  res.render('new/image', { pagina: 'New image | Avatar API', clase: 'text-center', clase2: 'no-footer' });
});

module.exports = router;
