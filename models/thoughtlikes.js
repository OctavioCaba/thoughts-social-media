'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ThoughtLikes extends Model {
    static associate(models) {
      ThoughtLikes.belongsTo(models.User, { as: 'user' });
      ThoughtLikes.belongsTo(models.Thought, { as: 'thought' });
    }
  };

  ThoughtLikes.init({}, {
    sequelize,
    modelName: 'ThoughtLikes',
  });

  return ThoughtLikes;
};
