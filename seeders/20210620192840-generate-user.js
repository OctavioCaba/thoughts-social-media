'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      { id: 1, name: 'Octavio', nickname: 'Godito', email: 'octavio@caba.com', password: 'pokimon', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Milena', nickname: 'Osito', email: 'minena@ainen.com', password: 'cedito', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Cooper', nickname: 'Vaco', email: 'coopeci@tonto.com', password: 'niniobobo', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
