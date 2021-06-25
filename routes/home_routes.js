const router = require('express').Router();
const HomeController = require('../controllers/home');

router.route('/').get(HomeController.index);

module.exports = router;
