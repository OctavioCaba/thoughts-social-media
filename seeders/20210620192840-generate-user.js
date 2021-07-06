'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      { id: 1, name: 'Octavio', nickname: 'Godito', email: 'octavio@caba.com', password_hash: 'pokimon', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Milena', nickname: 'Osito', email: 'minena@ainen.com', password_hash: 'cedito', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Cooper', nickname: 'Vaco', email: 'coopeci@tonto.com', password_hash: 'niniobobo', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
