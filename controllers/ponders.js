const Ponder = require('../models').Ponder;

module.exports = {
  index: function(req, res) {
    Ponder.findAll({ include: [{ association: 'user' }] }).then(ponders => {
      res.render('ponders/index', { ponders, userId: req.session.userId, title: 'Ponders', user: req.user });
    }).catch(err => {
      res.json(err);
      console.log(err);
    });
  },
  create: function(req, res) {
    Ponder.create({
      userId: req.session.userId,
      title: req.body.title,
      content: req.body.content
    }).then(() => {
      res.redirect('/ponders');
    }).catch(err => {
      res.json(err);
      console.log(err);
    });
  },
  destroy: function(req, res) {
    Ponder.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.redirect('/ponders')).catch(err => {
      res.json(err);
      console.log(err);
    });
  }
};
