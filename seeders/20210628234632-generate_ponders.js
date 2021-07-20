'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ponders', [
      {id: 1, userId: 1, title: 'Phasellus posuere dolor purus, eu aliquam ipsum.', content: 'Curabitur condimentum eros nisi, sollicitudin facilisis nunc euismod a. Maecenas maximus scelerisque condimentum. Suspendisse cursus quis.', slug: 'phasellus-posuere-dolor-purus-eu-aliquam-ipsum', createdAt: new Date(), updatedAt: new Date()},
      {id: 2, userId: 2, title: 'In sollicitudin consequat consectetur. Vestibulum condimentum tempor.', content: 'Duis vehicula, urna ac porttitor lobortis, leo metus egestas turpis, quis hendrerit magna ex vel tellus.', slug: 'in-sollicitudin-consequat-consectetur-vestibulum-condimentum-tempor', createdAt: new Date(), updatedAt: new Date()},
      {id: 3, userId: 3, title: 'Suspendisse sed dapibus quam, eu dapibus risus.', content: 'Sed sed mi sed arcu vulputate porta. Fusce sapien libero, blandit eget vestibulum et, ultrices id.', slug: 'suspendisse-sed-dapibus-quam-eu-dapibus-risus', createdAt: new Date(), updatedAt: new Date()},
      {id: 4, userId: 4, title: 'Suspendisse sit amet condimentum lacus. Curabitur et.', content: 'Praesent finibus consectetur molestie. Sed convallis efficitur eros eget ultrices. Vestibulum quis semper est. Sed id.', slug: 'suspendisse-sit-amet-condimentum-lacus-curabitur-et', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ponders', null, {});
  }
};
