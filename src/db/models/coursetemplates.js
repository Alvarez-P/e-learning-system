'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseTemplates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CourseTemplates.init({
    CourseTemplateID: DataTypes.UUID,
    CourseTemplateName: DataTypes.STRING,
    CourseTemplateContent: DataTypes.ARRAY(DataTypes.STRING),
    CourseTeplateRequirements: DataTypes.ARRAY(DataTypes.STRING),
    CourseTemplateMaterial: DataTypes.ARRAY(DataTypes.STRING),
    CourseTemlateTeacher: DataTypes.STRING,
    CourseTemplateDescription: DataTypes.STRING,
    CourseTempleteTags: DataTypes.ARRAY(DataTypes.STRING),
    CourseTemplateActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CourseTemplates',
  });
  return CourseTemplates;
};