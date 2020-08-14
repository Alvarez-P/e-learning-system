'use strict';
const encrypt = require('../../utils/encrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      UserID: '995f46e9-f2cc-4c8e-9e1e-db5aec60c063',
      UserName: 'Nombre',
      UserLastName: 'Apellido',
      UserEmail: 'email@gmail.com',
      UserPassword: encrypt('el2020', 10),
      UserRol: 'admin',
      UserActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
