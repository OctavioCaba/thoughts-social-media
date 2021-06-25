const router = require('express').Router();
const PonderController = require('../controllers/ponders');

router.route('/ponders/:id').delete(PonderController.destroy);

router.route('/ponders').get(PonderController.index).post(PonderController.create);

module.exports = router;
