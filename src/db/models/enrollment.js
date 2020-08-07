'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enrollment.associate = function(models) {
        Enrollment.hasOne(models.EnrollmentStudentID, {
          foreignKey: 'EnrollmentStudentID',
          as: 'student'
        }),
        Enrollment.hasOne(models.EnrollmentCourseID, {
          foreignKey: 'EnrollmentCourseID',
          as: 'course'
        })
      }
    }
  };
  Enrollment.init({
    EnrollmentID: DataTypes.UUID,
    EnrollmentStudentID: DataTypes.UUID,
    EnrollmentCourseID: DataTypes.UUID,
    EnrollmentCostCourse: DataTypes.INTEGER,
    EnrollmentPaidOut: DataTypes.BOOLEAN,
    EnrollmentActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Enrollment',
  });
  return Enrollment;
};