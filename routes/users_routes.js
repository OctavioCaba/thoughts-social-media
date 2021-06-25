const router = require('express').Router();
const UsersController = require('../controllers/users');

router.route('/users/registrate').get(UsersController.new).post(UsersController.create);

router.route('/users/session/login')
      .get(UsersController.showLogin)
      .post(UsersController.login)
      .delete(UsersController.destroySession);

module.exports = router;
