const { getToken, getRol, validateRol } = require('../utils/verify-rol')
const pipe = require('../utils/pipe')

/**
 * @function validatePermissions
 * @description Fcuntion for validate permissions of request
 * @param {Array} allowed Allowed roles array
 * @return {Function} Middleware
 */
const validatePermissions = (...allowed) => {
    return (request, response, next) => {
        pipe(
            getToken,
            getRol,
            validateRol(allowed)
        )({ headers: request.headers, next })    
    }    
}

module.exports = validatePermissions