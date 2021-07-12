module.exports = function(req, res) {
  res.render('notFound', { title: 'Page not found', status: 404, url: req.url });
};
