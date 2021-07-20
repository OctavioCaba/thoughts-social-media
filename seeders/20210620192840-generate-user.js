'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      { id: 1, name: 'Jhon Doe 1', nickname: 'Doe1', email: 'jhon1@doe.com', password_hash: 'thedoepassword', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Jhon Doe 2', nickname: 'Doe2', email: 'jhon2@doe.com', password_hash: 'thedoepassword', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Jhon Doe 3', nickname: 'Doe3', email: 'jhon3@doe.com', password_hash: 'thedoepassword', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Jhon Doe 4', nickname: 'Doe4', email: 'jhon4@doe.com', password_hash: 'thedoepassword', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
