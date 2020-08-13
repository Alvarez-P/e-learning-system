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

/**
 * @function deleteAllEnrollmentsOnDB
 * @description Function to delete Enrollments on db, unicamente para los tests
 */
const deleteAllEnrollmentsOnDB = async() => {
    try {
        const deleteEnrollments = await Enrollment.destroy({
            where: {},
            truncate: true
          })
    } catch (error) {
       console.log(error);
    }
}

module.exports = {
    addEnrollmentOnDB,
    deleteAllEnrollmentsOnDB
}