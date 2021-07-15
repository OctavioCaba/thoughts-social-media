'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('thoughts', [
      {id: 1, userId: 1, content: 'Primer pensamiento de la red social', slug: 'primer-pensamiento-de-la-red-social', createdAt: new Date(), updatedAt: new Date() },
      {id: 2, userId: 2, content: 'Minena pensando', slug: 'minena-pensando', createdAt: new Date(), updatedAt: new Date() },
      {id: 3, userId: 3, content: 'Woof woof', slug: 'woof-woof', createdAt: new Date(), updatedAt: new Date() },
      {id: 4, userId: 1, content: 'Pensamiento dos del godito c:', slug: 'pensamiento-dos-del-godito', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('thoughts', null, {});
  }
};
