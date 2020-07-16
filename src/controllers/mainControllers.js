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
    places: 'http://localhost:4000/api/places'
  });
};

exports.renderSignin = (req, res) => {
  res.render('sign-in', { pagina: 'Sign in | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};

exports.renderUser = (req, res) => {
  res.render('user', { pagina: 'User | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};

exports.formNewImage = (req, res) => {
  res.render('new/image', { pagina: 'New image | Avatar API', clase: 'text-center', clase2: 'no-footer' });
};
