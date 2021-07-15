const router = require('express').Router();
const PonderController = require('../controllers/ponders');
const PonderCommentsController = require('../controllers/ponderComments');
const PonderLikesController = require('../controllers/ponderLikes');

router.route('/ponders/:slug/comment/:comment_id').delete(PonderCommentsController.destroy);

router.route('/ponders/:slug/likes/:like_id').delete(PonderLikesController.destroy);

router.route('/ponders/:slug/likes').post(PonderLikesController.create);

router.route('/ponders/:slug').get(PonderController.show)
                              .post(PonderCommentsController.create)
                              .delete(PonderController.destroy);

router.route('/ponders').get(PonderController.index).post(PonderController.create);

module.exports = router;
