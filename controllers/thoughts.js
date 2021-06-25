const Thought = require('../models').Thought;
const ThoughtComments = require('../models').ThoughtComments;
const moment = require('moment');

function getDateWithoutTime(date) {
  return moment(date).format('YYYY-MM-DD');
}

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
    }).then(result => {
      /* res.redirect('/thoughts/'); */
      res.json(result);
    }).catch(err => res.json(err));
  },
  show: function(req, res) {
    let relativeCommentTimeArray = [];

    Thought.findByPk(req.params.id, { include: 'user' }).then(thought => {
      let relativeThoughtTime = moment(getDateWithoutTime(thought.createdAt)).fromNow();
      ThoughtComments.findAll({
        where: { thoughtId: req.params.id },
        include: 'user'
      }).then(comments => {
        comments.forEach(comment => {
          let relativeCommentTime = moment(getDateWithoutTime(comment.createdAt)).fromNow();
          relativeCommentTimeArray.push(relativeCommentTime);
        });
        res.render('thoughts/show', {
          thought,
          thoughtCreatedAt: relativeThoughtTime,
          userId: req.session.userId,
          title: 'Thoughts',
          user: req.user,
          comments,
          commentsCreatedAt: relativeCommentTimeArray
        });
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  },
  destroy: function(req, res) {
    Thought.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.redirect('/thoughts')).catch(err => {
      res.json(err);
      console.log(err);
    });
  }
};