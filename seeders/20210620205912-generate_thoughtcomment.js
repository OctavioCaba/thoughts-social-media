'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('thoughtcomments', [
      { id: 1, userId: 3, thoughtId: 1, content: 'Praesent feugiat augue', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, userId: 1, thoughtId: 2, content: 'Etiam quis rutrum', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, userId: 4, thoughtId: 3, content: 'Quisque lacus tellus', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, userId: 3, thoughtId: 4, content: 'Orci varius natoque', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, userId: 2, thoughtId: 4, content: 'Mauris urna est', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, userId: 1, thoughtId: 1, content: 'Donec arcu risus', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('thoughtcomments', null, {});
  }
};
