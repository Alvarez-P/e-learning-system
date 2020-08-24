const Joi = require('@hapi/joi')

module.exports = {
    // User schema validator for POST
    userCreateSchema: Joi.object({
        UserName: Joi.string().required(),
        UserLastName: Joi.string().required(),
        UserEmail: Joi.string().email().required(),
        UserPassword: Joi.string().min(8).required(),
        UserActive: Joi.boolean().required()
    }),

    userGetSchema: Joi.object({
        active: Joi.boolean(),
        limit: Joi.number().integer(),
        offset: Joi.number().integer(),
        rol: Joi.alternatives().try(
            Joi.string().valid('admin'),
            Joi.string().valid('user'),
            Joi.string().valid('teacher'),
            Joi.string().valid('student'),
        )
    }),

    userGetByIdSchema: Joi.object({
        id: Joi.string().guid({ version: ['uuidv4'] }).required()
    })
}