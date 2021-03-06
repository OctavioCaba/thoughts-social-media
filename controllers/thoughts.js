const Thought = require('../models').Thought;
const ThoughtComments = require('../models').ThoughtComments;
const ThoughtLikes = require('../models').ThoughtLikes;
const moment = require('moment');

module.exports = {
  index: function(req, res) {
    Thought.findAll({ include: [{ association: 'user' }] }).then(thoughts => {
      res.render('thoughts/index', { thoughts, userId: req.session.userId, title: 'Thoughts', user: req.user });
    });
  },
  create: function(req, res) {
    Thought.create({
      content: req.body.content,
      userId: req.session.userId
    }).then(result => res.redirect(`/thoughts/${result.slug}`)).catch(err => res.json(err));
  },
  show: function(req, res) {
    let relativeCommentTimeArray = [];

    Thought.findOne({
      where: {
        slug: req.params.slug
      },
      include: 'user'
    }).then(thought => {
      let relativeThoughtTime = moment(thought.createdAt).fromNow();

      ThoughtLikes.findAll({
        where: { thoughtId: thought.id },
        include: 'user'
      }).then(likes => {

        ThoughtComments.findAll({
          where: { thoughtId: thought.id },
          include: 'user'
        }).then(comments => {
          comments.forEach(comment => {
            let relativeCommentTime = moment(comment.createdAt).fromNow();
            relativeCommentTimeArray.push(relativeCommentTime);
          });

          res.render('thoughts/show', {
            thought,
            thoughtCreatedAt: relativeThoughtTime,
            userId: req.session.userId,
            title: `${thought.content} - ${thought.user.name}`,
            user: req.user,
            comments,
            likes,
            commentsCreatedAt: relativeCommentTimeArray
          });
        }).catch(err => console.log(err));
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  },
  destroy: function(req, res, next) {
    ThoughtComments.destroy({
      where: {
        thoughtId: req.params.id
      }
    }).catch(err => console.log(err));
    ThoughtLikes.destroy({
      where: {
        thoughtId: req.params.id
      }
    }).catch(err => console.log(err));
    Thought.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.redirect('/thoughts')).catch(err => console.log(err));
  }
};
