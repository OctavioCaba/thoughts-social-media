const router = require('express').Router();
const UsersController = require('../controllers/users');

router.route('/users/registrate').get(UsersController.new).post(UsersController.create);

router.route('/users/session/login')
      .get(UsersController.showLogin)
      .post(UsersController.login)
      .delete(UsersController.destroySession);

router.route('/users/:nickname').get(UsersController.showProfile).delete(UsersController.destroyUser);

router.route('/users/:nickname/edit').get(UsersController.showEditProfile).post(UsersController.editProfile);

module.exports = router;
