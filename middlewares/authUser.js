module.exports = function(req, res, next) {
  if (req.session.userId) return next();
  if (req.originalUrl !== '/users/session/login' && req.originalUrl !== '/users/registrate') return res.redirect('/users/session/login');
  next();
};
