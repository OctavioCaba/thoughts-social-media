'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pondercomments', [
      {id: 1, userId: 1, ponderId: 2, content: 'Sed tempus, quam sit amet', createdAt: new Date(), updatedAt: new Date()},
      {id: 2, userId: 2, ponderId: 3, content: 'Donec at metus posuere, tincidunt', createdAt: new Date(), updatedAt: new Date()},
      {id: 3, userId: 3, ponderId: 1, content: 'Mauris mattis scelerisque tellus, ut', createdAt: new Date(), updatedAt: new Date()},
      {id: 4, userId: 4, ponderId: 4, content: 'Pellentesque ornare dignissim ultrices. Aenean.', createdAt: new Date(), updatedAt: new Date()},
      {id: 5, userId: 1, ponderId: 3, content: 'Nulla sollicitudin sapien quis enim', createdAt: new Date(), updatedAt: new Date()},
      {id: 6, userId: 4, ponderId: 2, content: 'Nam et sem lacinia mauris', createdAt: new Date(), updatedAt: new Date()},
      {id: 7, userId: 2, ponderId: 4, content: 'Maecenas a pretium massa. Vestibulum.', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pondercomments', null, {});
  }
};
