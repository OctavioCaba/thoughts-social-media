const ThoughtLikes = require('../models').ThoughtLikes;

module.exports = {
  create: function(req, res) {
    ThoughtLikes.create({
      userId: req.session.userId,
      thoughtId: req.params.id
    }).then(like => res.json(like)).catch(err => console.log(err));
  },
  destroy: function(req, res) {
    ThoughtLikes.destroy({
      where: {
        id: req.params.like_id
      }
    }).then(like => res.json(like)).catch(err => console.log(err));
  }
};
