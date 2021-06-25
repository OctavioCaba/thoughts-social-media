'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Thought extends Model {
    static associate(models) {
      Thought.belongsTo(models.User, { as: 'user' });
      Thought.hasMany(models.ThoughtLikes, { as: 'likes' });
      Thought.hasMany(models.ThoughtComments, { as: 'comments' });
    }
  };

  Thought.init({
    content: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Thought',
  });

  return Thought;
};
