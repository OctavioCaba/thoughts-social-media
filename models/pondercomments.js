'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PonderComments extends Model {
    static associate(models) {
      PonderComments.belongsTo(models.User, { as: 'user' });
      PonderComments.belongsTo(models.Ponder, { as: 'ponder' });
    }
  };

  PonderComments.init({
    content: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PonderComments',
  });

  return PonderComments;
};
