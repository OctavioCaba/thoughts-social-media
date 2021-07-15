const PonderComments = require('../models').PonderComments;
const Ponder = require('../models').Ponder;

module.exports = {
  create: function(req, res) {
    Ponder.findOne({
      where: {
        slug: req.params.slug
      }
    }).then(ponder => {
      PonderComments.create({
        content: req.body.comment_input,
        userId: req.session.userId,
        ponderId: ponder.id
      }).then(() => res.redirect(`/ponders/${req.params.slug}`)).catch(err => console.log(err));
    }).catch(err => console.log(err));
  },
  destroy: function(req, res) {
    PonderComments.destroy({
      where: {
        id: req.params.comment_id
      }
    }).then(() => res.redirect(`/ponders/${req.params.slug}`)).catch(err => console.log(err));
  }
};
