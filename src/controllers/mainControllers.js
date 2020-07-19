const passport = require('passport');
const User = require('../models/User');

exports.renderHome = (req, res) => {
  res.render('home', { pagina: 'Avatar API', clase: 'without' });
};

exports.renderAbout = (req, res) => {
  res.render('about', { pagina: 'About | Avatar API' });
};

exports.renderDocs = (req, res) => {
  res.render('docs', { pagina: 'Documentation | Avatar API' });
};

exports.getApi = (req, res) => {
  res.json({
    bendings: 'http://localhost:4000/api/bendings',
    characters: 'http://localhost:4000/api/characters',
    nations: 'http://localhost:4000/api/nations',
    pets: 'http://localhost:4000/api/pets',
    places: 'http://localhost:4000/api/places',
    spirits: 'http://localhost:4000/api/spirits'
  });
};

/* exports.signUp = async (req, res, next) => {
  const user = new User(req.body);
  user.password = await user.encryptPwd(req.body.password);
  try {
    await user.save();
    res.json({ message: 'User created' });
  } catch (error) {
    console.log(error);
    next();
  }
}; */

exports.renderSignIn = (req, res) => {
  res.render('sign-in', { pagina: 'Sign in | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};

exports.signIn = passport.authenticate('local', {
  successRedirect: '/user',
  failureRedirect: '/user/sign-in'
});

exports.signOut = (req, res) => {
  req.logout();
  res.redirect('/');
};

exports.renderUser = (req, res) => {
  res.render('user', { pagina: 'User | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};

exports.formNewImage = (req, res) => {
  res.render('new/image', { pagina: 'New image | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};
