const Ponder = require('../models').Ponder;
const PonderComments = require('../models').PonderComments;
const PonderLikes = require('../models').PonderLikes;
const moment = require('moment');

const getDateWithoutTime = date => moment(date).format('YYYY-MM-DD');

module.exports = {
  index: function(req, res) {
    Ponder.findAll({ include: [{ association: 'user' }] }).then(ponders => {
      res.render('ponders/index', { ponders, userId: req.session.userId, title: 'Ponders', user: req.user });
    }).catch(err => {
      res.json(err);
      console.log(err);
    });
  },
  create: function(req, res) {
    Ponder.create({
      userId: req.session.userId,
      title: req.body.title,
      content: req.body.content
    }).then(() => {
      res.redirect('/ponders');
    }).catch(err => {
      res.json(err);
      console.log(err);
    });
  },
  show: function(req, res) {
    let relativeCommentTimeArray = [];

    Ponder.findByPk(req.params.id, { include: 'user' }).then(ponder => {
      let relativePonderTime = moment(getDateWithoutTime(ponder.createdAt)).fromNow();

      PonderLikes.findAll({
        where: { ponderId: req.params.id },
        include: 'user'
      }).then(likes => {

        PonderComments.findAll({
          where: { ponderId: req.params.id },
          include: 'user'
        }).then(comments => {
          comments.forEach(comment => {
            let relativeCommentTime = moment(getDateWithoutTime(comment.createdAt)).fromNow();
            relativeCommentTimeArray.push(relativeCommentTime);
          });

          res.render('ponders/show', {
            ponder,
            ponderCreatedAt: relativePonderTime,
            userId: req.session.userId,
            title: 'Ponder',
            user: req.user,
            likes,
            comments,
            commentsCreatedAt: relativeCommentTimeArray
          });
        }).catch(err => console.log(err));
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  },
  destroy: function(req, res) {
    Ponder.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.redirect('/ponders')).catch(err => {
      res.json(err);
      console.log(err);
    });
  }
};
