const Joi = require('@hapi/joi')

module.exports = {
    // enrollment schema validator for POST
  enrollmentCreateSchema: Joi.object({ 
    EnrollmentStudentID: Joi.string().guid({version: ['uuidv4']}).required(),
    EnrollmentCourseID: Joi.string().guid({version: ['uuidv4']}).required(),
    EnrollmentCostCourse: Joi.number().required(),
    EnrollmentPaidOut: Joi.boolean().strict().required(),
    EnrollmentActive: Joi.boolean().strict().required() 
  })
}