'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ThoughtComments extends Model {
    static associate(models) {
      ThoughtComments.belongsTo(models.User, { as: 'user' });
      ThoughtComments.belongsTo(models.Thought, { as: 'thought' });
    }
  };

  ThoughtComments.init({
    content: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ThoughtComments',
  });

  return ThoughtComments;
};
