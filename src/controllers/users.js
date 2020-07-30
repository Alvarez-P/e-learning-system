const encrypt = require('../utils/encrypt')
const genrateID = require('../utils/generateID')
const { addUserOnDB } = require('../db/methods/users')

/**
 * @function addUser
 * @description Controller for POST /api/users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express middleware function
 */
const addUser = async (req, res, next) => {
    try {
        req.body.UserPassword = encrypt(req.body.UserPassword, 10)
        req.body.UserID = genrateID()
        const result = await addUserOnDB(req.body, next)
        res.status(201).send({ uuid: result.UserID, message: 'Success' })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addUser
}