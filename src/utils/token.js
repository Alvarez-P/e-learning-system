require('dotenv').config()
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

/**
 * @function token
 * @description Funtion to generate token
 * @param {Object} data Contiene el payload del token
 * @param {Object} time Contiene el tiempo de expiración del token.
 * @return {String} retorna un token
 */

function generateToken(data, time) {
    return jwt.sign({
        exp: Math.floor((Date.now() / 1000) + (time * 60)),
        email: data.UserEmail,
        password: data.UserPassword,
        rol: data.UserRol
    }, SECRET)
}

module.exports = {
    generateToken
}