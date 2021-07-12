const router = require('express').Router();
const ThoughtsController = require('../controllers/thoughts');
const ThoughtCommentsController = require('../controllers/thoughtComments');
const ThoughtLikesController = require('../controllers/thoughtLikes');

router.route('/thoughts/:id').get(ThoughtsController.show)
                            .post(ThoughtCommentsController.create)
                            .delete(ThoughtsController.destroy);

router.route('/thoughts/:thought_id/comment/:comment_id').delete(ThoughtCommentsController.destroy);

router.route('/thoughts/:thought_id/likes/:like_id').delete(ThoughtLikesController.destroy);

router.route('/thoughts/:id/likes').post(ThoughtLikesController.create);

router.route('/thoughts').get(ThoughtsController.index).post(ThoughtsController.create);

module.exports = router;
