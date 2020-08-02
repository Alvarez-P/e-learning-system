const { CourseTemplates } = require('../models/index');
const { HttpError } = require('../../utils/HttpError');

/**
 * @function addCourseOnDB
 * @description Function to add Course Templates on db
 * @param {Object} course - Course Template object
 * @param {Function} next - Express middleware function
 */

 const addCourseOnDB = async (course, next) => {
     try{
         const res = await CourseTemplates.create(course);
         if(!res.dataValues) throw new HttpError();
         return res.dataValues
     }catch(error){
         next(error);
     }
 }

 module.exports = {
     addCourseOnDB
 }