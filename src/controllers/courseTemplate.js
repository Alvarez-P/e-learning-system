const genrateID = require('../utils/generateID');
const { addCourseOnDB} = require('../db/methods/courseTemplate');


/**
 * @function addCourseTemplate
 * @description controller for POST /api/course-templates
 * @param {Object} req - Express request object
 * @param {Object} res -Express response object
 * @param {Function} next -Express middleware function
 */

 const addCourseTemplate = async (req, res, next) => {
     try{
         req.body.CourseTemplateID = genrateID();
        const result = await addCourseOnDB(req.body, next);
        res.status(201).send( {uuid: result.CourseTemplateID, message: 'Success'});
     }catch(error){
         next(error);
     }
 }

 module.exports = {
     addCourseTemplate
 }