const User = require('../models').User;

module.exports = {
  new: function(req, res) {
    if (req.session.userId) return res.redirect('/');

    res.render('users/new', { title: 'Register' });
  },
  create: function(req, res) {
    User.create({
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password
    }).then(() => {
      User.login(req.body.email, req.body.password).then(user => {
        if (user) {
          req.session.userId = user.id;
          res.redirect('/');
        } else {
          res.send('Wrong credentials');
        }
      }).catch(err => console.error(err));
    }).catch(err => console.log(err));
  },
  showLogin: function(req, res) {
    if (req.session.userId) return res.redirect('/');

    res.render('users/login', { title: 'Login' });
  },
  login: function(req, res) {
    User.login(req.body.email, req.body.password).then(user => {

      if (user) {
        req.session.userId = user.id;
        res.redirect('/');
      } else {
        res.send('<h1>No se pudo crear</h1>');
      }
    }).catch(err => console.error(err));
  },
  destroySession: function(req, res) {
    req.session.destroy(function() {
      res.redirect('/users/sessions/login');
    });
  }
};
