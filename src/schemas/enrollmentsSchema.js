const Joi = require('@hapi/joi')

module.exports = {
    // enrollment schema validator for POST
  enrollmentCreateSchema: Joi.object({ 
    EnrollmentsID: Joi.string().guid({version: ['uuidv4']}).required(),
    EnrollmentStudentID: Joi.string().guid({version: ['uuidv4']}).required(),
    EnrollmentCourseID: Joi.string().guid({version: ['uuidv4']}).required(),
    EnrollmentCostCourse: Joi.number().required(),
    EnrollmentPaidOut: Joi.boolean().required(),
    EnrollmentActive: Joi.boolean().required() //investigar como poner elemento activo Joi.boolean().truthy('yes').falsy('no').sensitive().required()
  })
}