'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('thoughtcomments', [
      { id: 1, userId: 3, thoughtId: 1, content: 'Buenardo', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, userId: 1, thoughtId: 2, content: 'Sos hermosa', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, userId: 1, thoughtId: 3, content: 'Coopeshito', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, userId: 3, thoughtId: 4, content: 'Te odio', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, userId: 2, thoughtId: 4, content: 'Mi bebe', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, userId: 1, thoughtId: 1, content: 'El ego', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('thoughtcomments', null, {});
  }
};
