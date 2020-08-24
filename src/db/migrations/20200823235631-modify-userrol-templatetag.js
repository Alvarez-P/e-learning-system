'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Users', 'UserRol', {
        type: Sequelize.ARRAY(Sequelize.STRING) + 'USING CAST("UserRol" as ' + Sequelize.ARRAY(Sequelize.STRING) + ')',
        defaultValue: ['user']
      }),
      queryInterface.changeColumn('CourseTemplates', 'CourseTemplateDescription', {
        type: Sequelize.STRING
      })
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
