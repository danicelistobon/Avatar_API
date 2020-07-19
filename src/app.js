const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');

const app = express();
require('./config/passport');

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret-avatar-api',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use((req, res, next) => {
  res.locals.ruta = req.path;
  res.locals.user = req.user || null;
  return next();
});

// Routes
app.use('/', require('./routes/main'));
app.use('/api/bendings', require('./routes/bendings'));
app.use('/api/characters', require('./routes/characters'));
app.use('/api/nations', require('./routes/nations'));
app.use('/api/pets', require('./routes/pets'));
app.use('/api/places', require('./routes/places'));
app.use('/api/spirits', require('./routes/spirits'));

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Error 404
app.use((req, res, next) => {
  res.status(404).render('page-not-found', { pagina: '404 | Avatar API', clase: 'without', clase2: 'no-footer' });
  return next();
});

module.exports = app;
