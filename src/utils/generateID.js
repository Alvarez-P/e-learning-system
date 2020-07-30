const uuid4 = require('uuid').v4

/**
 * @function generateID
 * @description Uuid generator
 * @return {String} uuid
 */
const generateID = () =>  uuid4()

module.exports = generateID