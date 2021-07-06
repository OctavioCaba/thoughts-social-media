const ThoughtComments = require('../models').ThoughtComments;

module.exports = {
  create: function(req, res) {
    ThoughtComments.create({
      content: req.body.comment_input,
      userId: req.session.userId,
      thoughtId: req.params.id
    }).then(() => res.redirect(`/thoughts/${req.params.id}`)).catch(err => console.log(err));
  },
  destroy: function(req, res) {
    ThoughtComments.destroy({
      where: {
        id: req.params.comment_id
      }
    }).then(() => res.redirect(`/thoughts/${req.params.thought_id}`)).catch(err => console.log(err));
  }
};
