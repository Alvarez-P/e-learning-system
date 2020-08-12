const Joi = require('@hapi/joi');

module.exports = {
    courseTemplateCreateSchema: Joi.object({
        CourseTemplateName: Joi.string().required(),
        CourseTemplateContent: 	Joi.array().required(),
        CourseTemplateRequirements: Joi.array().required(),
        CourseTemplateMaterial: Joi.array().required(),
        CourseTemplateTeacher: Joi.string().required(),
        CourseTemplateDescription: Joi.boolean().required(),
        CourseTemplateTags: Joi.array().required(),
        CourseTemplateActive: Joi.boolean().required()

    })
}