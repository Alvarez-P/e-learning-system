const Joi = require('@hapi/joi')

module.exports = {
    // enrollment schema validator for POST
  enrollmentCreateSchema: Joi.object({ //investigar doc uuid joi
    EnrollmentStudentID: Joi.uuid().required(),
    EnrollmentCourseID: Joi.uuid().required(),
    EnrollmentCostCourse: Joi.number().required(),
    EnrollmentPaidOut: Joi.boolean().required(),
    EnrollmentActive: Joi.boolean().required() //investigar como poner elemento activo
  })
}