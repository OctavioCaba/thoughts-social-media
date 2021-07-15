const User = require('../models').User;
const bcrypt = require('bcrypt');
const Thought = require('../models').Thought;
const ThoughtComments = require('../models').ThoughtComments;
const ThoughtLikes = require('../models').ThoughtLikes;
const Ponder = require('../models').Ponder;
const PonderComments = require('../models').PonderComments;
const PonderLikes = require('../models').PonderLikes;

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
          res.redirect(`/users/${user.nickname}`);
        } else {
          res.send('Wrong credentials');
        }
      }).catch(err => console.error(err));
    }).catch(err => console.log(err));
  },
  showProfile: function(req, res) {
    User.findOne({
      where: { nickname: req.params.nickname },
      include: ['thoughts', 'ponders']
    }).then(userFound => {
      res.render('users/show', { user: req.user, userFound, title: userFound.name });
    }).catch(err => console.log(err));
  },
  showEditProfile: function(req, res) {
    User.findOne({
      where: { nickname: req.params.nickname }
    }).then(userFound => {
      res.render('users/edit', { user: req.user, userFound, title: `Edit ${userFound.name}'s profile` });
    }).catch(err => console.log(err));
  },
  editProfile: function(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(userFound => {
      if ((userFound.dataValues.id === req.session.userId) && (req.body.new_password === req.body.repeat_new_password)) {
        bcrypt.compare(req.body.old_password, userFound.dataValues.password_hash, (err, valid) => {
          if (err) return err;

          if (valid) {
            bcrypt.hash(req.body.new_password, 10, (err, hash) => {
              if (err) return err;

              User.update({
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email,
                password_hash: hash
              }, {
                where: {
                  id: req.user.id
                }
              }).then(() => res.redirect(`/users/${req.params.nickname}`)).catch(err => console.log(err));
            });
          } else {
            res.render('users/edit', { user: req.user, userFound, title: `Edit ${userFound.name}'s profile`, message: 'Wrong credentials' });
          }
        });
      } else {
        res.render('users/edit', { user: req.user, userFound, title: `Edit ${userFound.name}'s profile`, message: 'Wrong credentials' });
      }
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
        res.render('users/login', { title: 'Login', message: 'Wrong credentials' });
      }
    }).catch(err => console.error(err));
  },
  destroyUser: function(req, res) {
    User.findOne({
      where: { nickname: req.params.nickname }
    }).then(user => {
      ThoughtLikes.destroy({ where: { userId: user.id } }).catch(err => console.log(err));
      PonderLikes.destroy({ where: { userId: user.id } }).catch(err => console.log(err));
      ThoughtComments.destroy({ where: { userId: user.id } }).catch(err => console.log(err));
      PonderComments.destroy({ where: { userId: user.id } }).catch(err => console.log(err));
      Thought.destroy({ where: { userId: user.id } }).catch(err => console.log(err));
      Ponder.destroy({ where: { userId: user.id } }).catch(err => console.log(err));
    }).catch(err => console.log(err));
    User.destroy({
      where: {
        nickname: req.params.nickname
      }
    }).then(() => {
      req.session.destroy(function() {
        res.redirect('/users/sessions/login');
      });
    }).catch(err => console.log(err));
  },
  destroySession: function(req, res) {
    req.session.destroy(function() {
      res.redirect('/users/sessions/login');
    });
  }
};
