const { getUserOnDB } = require('../db/methods/users')
const { HttpError } = require('../utils/HttpError')
/**
 * @function validateIfEmailExists 
 * @description Middleware para validar si existe un email
 * @param {Object} err - error en la peticion
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
*/
const validateIfEmailExists = async (req, res, next) => {
    try {
        let listUsers = await getUserOnDB({ UserEmail: req.body.UserEmail }, next)
        if(listUsers.length > 0) throw new HttpError('Email already exists', 400)
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { validateIfEmailExists }