const User = require('../models').User;

module.exports = (req, res, next) => {
  if (!req.session.userId) return next();

  User.findByPk(req.session.userId).then(user => {
    if (user) {
      req.user = user;
      return next();
    }
  }).catch(err => {
    res.send(err);
    console.log(err);
  });
}
