'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CourseTemplates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CourseTemplateID: {
        type: Sequelize.UUID
      },
      CourseTemplateName: {
        type: Sequelize.STRING
      },
      CourseTemplateContent: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      CourseTeplateRequirements: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      CourseTemplateMaterial: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      CourseTemlateTeacher: {
        type: Sequelize.STRING
      },
      CourseTemplateDescription: {
        type: Sequelize.BOOLEAN
      },
      CourseTempleteTags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      CourseTemplateActive: {
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
    await queryInterface.dropTable('CourseTemplates');
  }
};