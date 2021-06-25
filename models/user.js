'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Thought, { as: 'thoughts' });
      User.hasMany(models.Ponder, { as: 'ponders' });
    };
  };

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {
    sequelize,
    modelName: 'User',
  });

  User.prototype.authenticatePassword = function(password) {
    return new Promise((res, rej) => {
      bcrypt.compare(password, this.password_hash, function(err, valid) {
        if (err) return rej(err);
        res(valid);
      });
    });
  };

  User.login = function(email, password) {
    return User.findOne({
      where: {
        email
      }
    }).then(user => {
      if (!user) return null;
      return user.authenticatePassword(password).then(valid => valid ? user : null);
    });
  };

  User.beforeCreate((user, options) => {
    return new Promise((res, rej) => {
      if (user.password) {
        bcrypt.hash(user.password, 10, (err, hash) => {
          if (err) return rej(err);
          user.password_hash = hash;
          res();
        });
      };
    });
  });

  return User;
};
