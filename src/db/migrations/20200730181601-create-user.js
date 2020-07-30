'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserID: {
        allowNull: false,
        type: Sequelize.UUID
      },
      UserName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      UserLastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      UserEmail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      UserPassword: {
        allowNull: false,
        type: Sequelize.STRING
      },
      UserRol: {
        allowNull: false,
        type: Sequelize.STRING
      },
      UserActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};