const PonderComments = require('../models').PonderComments;

module.exports = {
  create: function(req, res) {
    PonderComments.create({
      content: req.body.comment_input,
      userId: req.session.userId,
      ponderId: req.params.id
    }).then(() => res.redirect(`/ponders/${req.params.id}`)).catch(err => console.log(err));
  },
  destroy: function(req, res) {
    PonderComments.destroy({
      where: {
        id: req.params.comment_id
      }
    }).then(() => res.redirect(`/ponders/${req.params.ponder_id}`)).catch(err => console.log(err));
  }
};
