'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('thoughts', [
      {id: 1, userId: 1, content: 'Integer quis efficitur mi. Lorem ipsum dolor sit.', slug: 'integer-quis-efficitur-mi-lorem-ipsum-dolor-sit', createdAt: new Date(), updatedAt: new Date() },
      {id: 2, userId: 2, content: 'Duis eu libero lectus. Donec vel ornare sapien.', slug: 'duis-eu-libero-lectus-donec-vel-ornare-sapien', createdAt: new Date(), updatedAt: new Date() },
      {id: 3, userId: 3, content: 'Phasellus a quam dui. Cras a congue orci.', slug: 'phasellus-a-quam-dui-cras-a-congue-orci', createdAt: new Date(), updatedAt: new Date() },
      {id: 4, userId: 1, content: 'Mauris posuere, massa vel mattis eleifend, erat erat.', slug: 'mauris-posuere-massa-vel-mattis-eleifend-erat-erat', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('thoughts', null, {});
  }
};
