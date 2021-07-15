const ThoughtComments = require('../models').ThoughtComments;
const Thought = require('../models').Thought;

module.exports = {
  create: function(req, res) {
    Thought.findOne({
      where: {
        slug: req.params.slug
      }
    }).then(thought => {
      ThoughtComments.create({
        content: req.body.comment_input,
        userId: req.session.userId,
        thoughtId: thought.id
      }).then(() => res.redirect(`/thoughts/${req.params.slug}`)).catch(err => console.log(err));
    }).catch(err => console.log(err));
  },
  destroy: function(req, res) {
    ThoughtComments.destroy({
      where: {
        id: req.params.comment_id
      }
    }).then(() => res.redirect(`/thoughts/${req.params.slug}`)).catch(err => console.log(err));
  }
};
