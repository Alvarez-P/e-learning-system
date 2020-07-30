const bcrypt = require('bcrypt')

/**
 * @function encrypt
 * @description Funtion to encrypt text
 * @param {String} text - Text to encrypt
 * @param {Number} saltRounds - Bcrypt param
 * @return {String} encrypted text 
 */
const encrypt = (text, saltRounds) => {
    const salt = bcrypt.genSaltSync(saltRounds)
    return bcrypt.hashSync(text, salt)
}

module.exports = encrypt