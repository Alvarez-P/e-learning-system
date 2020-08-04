const encrypt = require('../utils/encrypt')
const genrateID = require('../utils/generateID')
const { addUserOnDB, getUserOnDB } = require('../db/methods/users')
const { buildUserFilters } = require('../db/buildFilters/users');

/**
 * @function addUser
 * @description Controller for POST /api/users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express middleware function
 */
const addUser = async(req, res, next) => {
    try {
        req.body.UserPassword = encrypt(req.body.UserPassword, 10)
        req.body.UserID = genrateID()
        const result = await addUserOnDB(req.body, next)
        res.status(201).send({ uuid: result.UserID, message: 'Success' })
    } catch (error) {
        next(error)
    }
}

/**
 * @function getUser
 * @description Controller for GET /api/users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express middleware function
 */

const getUser = async(req, res, next) => {
    try {
        let { filters, offset, limit } = buildUserFilters(req.query, next)
        let listUsers = await getUserOnDB(filters, next)
        const count = listUsers.length
        listUsers = listUsers.slice(offset, offset + limit)
        res.status(200).send({
            count,
            currentTotal: listUsers.length,
            result: listUsers
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    addUser,
    getUser
}