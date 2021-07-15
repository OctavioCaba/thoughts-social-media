'use strict';
const { Model } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

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
    },
    slug: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Ponder',
  });

  SequelizeSlugify.slugifyModel(Ponder, {
    source: ['title'],
    slugOptions: { lower: true },
    overwrite: false,
    column: 'slug'
  });

  return Ponder;
};
