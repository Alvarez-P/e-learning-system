require('dotenv').config()
const jwt = require('jsonwebtoken')
const { HttpError } = require("./HttpError")
const { SECRET } = process.env

/**
 * @function getToken
 * @description Function for get Token from header
 * @param {Object} headers Object with request headers
 * @return {TOKEN} JWT string
 * @return {next} Express middleware function
 */
const getToken = ({ headers }) => {
  if (headers.authorization) {
    let TOKEN;
    const headerSplit = headers.authorization.split(" ");
    if (headerSplit.length > 1) TOKEN = headerSplit[1];
    else return { error: "Invalid Authorization Header", code: 400 };
    return { TOKEN };
  } else
    return { error: "Authorization Header is needed", code: 400 };
};
/**
 * @function getRol
 * @description Function for validate TOKEN and get rol from TOKEN
 * @param {Object} TOKEN JWT string
 * @return {data} Token data
 * @return {next} Express middleware function
*/
const getRol = (getTokenResult) => {
    if(getTokenResult.error) return getTokenResult
    let error = {}, data
    jwt.verify(getTokenResult.TOKEN, SECRET, function(err, decoded) {
        (err) ? 
        (error.error = err.message, error.code = 400): data = decoded
    })
    if (error.error) return error
    return data
}
/**
 * @function validateRol
 * @description Validate permissions for the route
 * @param {Array} allowed Allowed roles for this route
 * @return {Function} Function that catch the second params and validate the permissions
 * 
 * @param {Object} requestRol User rol
 * @param {Function} next Express middleware function
*/
const validateRol = (allowed, next) => (getRolResult) => {
    try {
        if(getRolResult.error) throw new HttpError(getRolResult.error, getRolResult.code)
        if(allowed.length > 0 && allowed.indexOf(getRolResult.rol) === -1) throw new HttpError('Permission denied for role', 401)
        next()
    } catch (error) {
        next(error)
    }
}
module.exports = {
    getToken,
    getRol,
    validateRol
} 