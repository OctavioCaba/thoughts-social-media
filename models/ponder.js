'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ponder extends Model {
    static associate(models) {
      Ponder.belongsTo(models.User, { as: 'user' });
      Ponder.hasMany(models.PonderLikes, { as: 'likes' });
      Ponder.hasMany(models.PonderComments, { as: 'comments' });
    }
  };

  Ponder.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Ponder',
  });

  return Ponder;
};
