'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Enrollments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      EnrollmentID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID
      },
      EnrollmentStudentID: {
        allowNull: false,
        type: Sequelize.UUID
      },
      EnrollmentCourseID: {
        allowNull: false,
        type: Sequelize.UUID
      },
      EnrollmentCostCourse: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      EnrollmentPaidOut: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      EnrollmentActive: {
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
    await queryInterface.dropTable('Enrollments');
  }
};