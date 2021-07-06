'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pondercomments', [
      {id: 1, userId: 1, ponderId: 2, content: 'Que monitooo', createdAt: new Date(), updatedAt: new Date()},
      {id: 2, userId: 2, ponderId: 3, content: 'Comentario por seed', createdAt: new Date(), updatedAt: new Date()},
      {id: 3, userId: 3, ponderId: 1, content: 'Woof woof', createdAt: new Date(), updatedAt: new Date()},
      {id: 4, userId: 3, ponderId: 4, content: 'Ejemplo de seed', createdAt: new Date(), updatedAt: new Date()},
      {id: 5, userId: 4, ponderId: 3, content: 'Este es mío?', createdAt: new Date(), updatedAt: new Date()},
      {id: 6, userId: 1, ponderId: 2, content: 'Lorem ipsum', createdAt: new Date(), updatedAt: new Date()},
      {id: 7, userId: 4, ponderId: 4, content: 'Para probar eliminar', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pondercomments', null, {});
  }
};
