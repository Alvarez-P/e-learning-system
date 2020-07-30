const { User } = require('../models/index')
const { HttpError }  = require('../../utils/HttpError')

/**
 * @function addUserOnDB
 * @description Function to add Users on db
 * @param {Object} user - user object
 * @param {Function} next - Express middleware function
 */
const addUserOnDB = async (user, next) => {
    try {
        const res = await User.create(user)
        if(!res.dataValues) throw new HttpError()
        return res.dataValues
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addUserOnDB
}