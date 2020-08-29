'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Users', 'UserRol', {
        type: Sequelize.ARRAY(Sequelize.STRING) + 'USING CAST("UserRol" as ' + Sequelize.ARRAY(Sequelize.STRING) + ')',
        defaultValue: ['user'],
        allowNull: true
      })
  },

  down: async (queryInterface, Sequelize) => {

  }
};
