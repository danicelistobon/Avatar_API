const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.ruta = req.path;
  return next();
});

// Routes
app.use('/', require('./routes/main'));
app.use('/api/bendings', require('./routes/bendings'));
app.use('/api/characters', require('./routes/characters'));
app.use('/api/nations', require('./routes/nations'));
app.use('/api/places', require('./routes/places'));

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Error 404
app.use((req, res, next) => {
  res.status(404).render('page-not-found', { pagina: '404 | Avatar API', clase: 'without', clase2: 'no-footer' });
  return next();
});

module.exports = app;
