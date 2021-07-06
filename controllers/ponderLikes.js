const PonderLikes = require('../models').PonderLikes;

module.exports = {
  create: function(req, res) {
    PonderLikes.create({
      userId: req.session.userId,
      ponderId: req.params.id
    }).then(like => res.json(like)).catch(err => console.log(err));
  },
  destroy: function(req, res) {
    PonderLikes.destroy({
      where: {
        id: req.params.like_id
      }
    }).then(like => res.json(like)).catch(err => console.log(err));
  }
};
