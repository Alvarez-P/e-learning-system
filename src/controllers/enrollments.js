const encrypt = require('../utils/encrypt')
const genrateID = require('../utils/generateID')
const { addEnrollmentOnDB } = require('../db/methods/enrollments')

/**
 * @function addEnrollments
 * @description Controller for POST /api/enrollments 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express middleware function
 */
const addEnrollment = async (req, res, next) => {
    try {
        req.body.EnrollmentID = genrateID()
        const result = await addEnrollmentOnDB(req.body, next)
        res.status(201).send({ uuid: result.EnrollmentID, message: 'Success' })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addEnrollment
}