const express = require('express')
const router = express.Router()

const { enrollmentsCreateSchema } = require('../schemas/enrollmentsSchema')
const validator = require('express-joi-validation').createValidator({passError: true})
const { addEnrollments } = require('../controllers/enrollments')

router.post('/', validator.body(enrollmentsCreateSchema), addEnrollments)

module.exports = router