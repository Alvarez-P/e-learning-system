const express = require('express')
const router = express.Router()

const { enrollmentCreateSchema } = require('../schemas/enrollmentsSchema')
const validator = require('express-joi-validation').createValidator({passError: true})
const { addEnrollment } = require('../controllers/enrollments')

router.post('/', validator.body(enrollmentCreateSchema), addEnrollment)

module.exports = router