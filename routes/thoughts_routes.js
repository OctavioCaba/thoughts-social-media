const router = require('express').Router();
const ThoughtsController = require('../controllers/thoughts');

router.route('/thoughts/:id').get(ThoughtsController.show).delete(ThoughtsController.destroy);

router.route('/thoughts').get(ThoughtsController.index).post(ThoughtsController.create);

module.exports = router;
