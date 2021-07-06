'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ponderlikes', [
      {id: 1, userId: 2, ponderId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id: 2, userId: 1, ponderId: 2, createdAt: new Date(), updatedAt: new Date()},
      {id: 3, userId: 1, ponderId: 3, createdAt: new Date(), updatedAt: new Date()},
      {id: 4, userId: 4, ponderId: 4, createdAt: new Date(), updatedAt: new Date()},
      {id: 5, userId: 3, ponderId: 2, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ponderlikes', null, {});
  }
};
