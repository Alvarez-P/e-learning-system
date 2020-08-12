require('dotenv').config()
const { HttpError } = require("./HttpError")
const { SECRET } = process.env

/**
 * @function getToken
 * @description Function for get Token from header
 * @param {Object} headers Object with request headers
 * @param {Function} next Express middleware function
 * @return {TOKEN} JWT string
 * @return {next} Express middleware function
 */
const getToken = ({ headers, next}) => {
    try {
        let TOKEN 
        if (headers.authorization){
            const headerSplit = headers.authorization.split(' ')
            if(headerSplit.length > 1) {
                TOKEN = headerSplit[1]
                return { TOKEN, next }
            }
            else throw new HttpError('Invalid Authorization Header', 400)
        }
        else throw new HttpError('Authorization Header is needed', 400)
    } catch (error) {
        next(error)
    }    
}
/**
 * @function getRol
 * @description Function for validate TOKEN and get rol from TOKEN
 * @param {Object} TOKEN JWT string
 * @param {Function} next Express middleware function
 * @return {requestRol} User rol
 * @return {next} Express middleware function
*/
const getRol = ({ TOKEN, next }) => {
    try {
        let requestRol = "user"
        // jwt.verify(token, SECRET, function(err, decoded) {
        //     if (err) console.log(err); // throw new HttpError(err) 
        //     requestRol = decoded.rol 
        // });
        return { requestRol, next }
    } catch (error) {
        next(error)
    }
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
const validateRol = allowed => ({ requestRol, next }) => {
    try {
        if (allowed.indexOf(requestRol) > -1) next()
        else throw new HttpError('Permission denied for role', 401)
    } catch (error) {
        next(error)
    }
}
module.exports = {
    getToken,
    getRol,
    validateRol
} 