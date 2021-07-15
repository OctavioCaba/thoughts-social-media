const PonderLikes = require('../models').PonderLikes;
const Ponder = require('../models').Ponder;

module.exports = {
  create: function(req, res) {
    Ponder.findOne({
      where: {
        slug: req.params.slug
      }
    }).then(ponder => {
      PonderLikes.create({
        userId: req.session.userId,
        ponderId: ponder.id
      }).then(like => res.json(like)).catch(err => console.log(err));
    }).catch(err => console.log(err));
  },
  destroy: function(req, res) {
    PonderLikes.destroy({
      where: {
        id: req.params.like_id
      }
    }).then(like => res.json(like)).catch(err => console.log(err));
  }
};
