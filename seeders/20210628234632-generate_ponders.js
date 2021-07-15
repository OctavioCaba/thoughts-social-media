'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ponders', [
      {id: 1, userId: 1, title: 'Primer ponder seed', content: 'Primer ponder crear por seed', slug: 'primer-ponder-seed', createdAt: new Date(), updatedAt: new Date()},
      {id: 2, userId: 2, title: 'Ponder de Minena', content: 'Y acá el contenido c:', slug: 'ponder-de-minena', createdAt: new Date(), updatedAt: new Date()},
      {id: 3, userId: 3, title: 'Ahora juega Argentina', content: 'Ojalá ganemos', slug: 'ahora-juega-argentina', createdAt: new Date(), updatedAt: new Date()},
      {id: 4, userId: 2, title: 'Faltan los likes y comments', content: 'Joeeeeer', slug: 'faltan-los-likes-y-comments', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ponders', null, {});
  }
};
