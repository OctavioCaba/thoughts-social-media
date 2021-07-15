const router = require('express').Router();
const ThoughtsController = require('../controllers/thoughts');
const ThoughtCommentsController = require('../controllers/thoughtComments');
const ThoughtLikesController = require('../controllers/thoughtLikes');

router.route('/thoughts/:slug').get(ThoughtsController.show)
                              .post(ThoughtCommentsController.create)
                              .delete(ThoughtsController.destroy);

router.route('/thoughts/:slug/comment/:comment_id').delete(ThoughtCommentsController.destroy);

router.route('/thoughts/:slug/likes/:like_id').delete(ThoughtLikesController.destroy);

router.route('/thoughts/:slug/likes').post(ThoughtLikesController.create);

router.route('/thoughts').get(ThoughtsController.index).post(ThoughtsController.create);

module.exports = router;
