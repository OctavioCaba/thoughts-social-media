'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PonderLikes extends Model {
    static associate(models) {
      PonderLikes.belongsTo(models.User, { as: 'user' });
      PonderLikes.belongsTo(models.Ponder, { as: 'ponders' });
    }
  };

  PonderLikes.init({}, {
    sequelize,
    modelName: 'PonderLikes',
  });

  return PonderLikes;
};
