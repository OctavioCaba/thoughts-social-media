const ThoughtLikes = require('../models').ThoughtLikes;
const Thought = require('../models').Thought;

module.exports = {
  create: function(req, res) {
    Thought.findOne({
      where: {
        slug: req.params.slug
      }
    }).then(thought => {
      ThoughtLikes.create({
        userId: req.session.userId,
        thoughtId: thought.id
      }).then(like => res.json(like)).catch(err => console.log(err));
    }).catch(err => console.log(err));
  },
  destroy: function(req, res) {
    ThoughtLikes.destroy({
      where: {
        id: req.params.like_id
      }
    }).then(like => res.json(like)).catch(err => console.log(err));
  }
};
