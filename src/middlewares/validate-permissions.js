const { getToken, getRol, validateRol } = require('../utils/verify-rol')
const pipe = require('../utils/pipe')

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