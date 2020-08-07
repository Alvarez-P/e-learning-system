const { Enrollment } = require('../models/index')
const { HttpError }  = require('../../utils/HttpError')

/**
 * @function addUserOnDB
 * @description Function to add Enrollments on db
 * @param {Object} user - user object
 * @param {Function} next - Express middleware function
 */
const addEnrollmentOnDB = async (enrollment, next) => {
    try {
        const res = await Enrollment.create(enrollment)
        if(!res.dataValues) throw new HttpError()
        return res.dataValues
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addEnrollmentOnDB
}