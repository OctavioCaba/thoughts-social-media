'use strict';
const { Model } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

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
    },
    slug: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Thought',
  });

  SequelizeSlugify.slugifyModel(Thought, {
    source: ['content'],
    slugOptions: { lower: true },
    overwrite: false,
    column: 'slug'
  });

  return Thought;
};
