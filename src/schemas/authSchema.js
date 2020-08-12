const Joi = require('@hapi/joi')

module.exports = {
    authSchema: Joi.object({
        UserEmail: Joi.string().email().required(),
        UserPassword: Joi.string().min(8).required(),
    })
}