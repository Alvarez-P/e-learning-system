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
        type: Sequelize.UUID
      },
      EnrollmentStudentID: {
        type: Sequelize.UUID
      },
      EnrollmentCourseID: {
        type: Sequelize.UUID
      },
      EnrollmentCostCourse: {
        type: Sequelize.INTEGER
      },
      EnrollmentPaidOut: {
        type: Sequelize.BOOLEAN
      },
      EnrollmentActive: {
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