'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('thoughtlikes', [
      { id: 1, userId: 2, thoughtId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, userId: 1, thoughtId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, userId: 2, thoughtId: 3, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, userId: 1, thoughtId: 3, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, userId: 3, thoughtId: 4, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('thoughtlikes', null, {});
  }
};
