const express = require('express')
const router = express.Router()

const validator = require('express-joi-validation').createValidator({ passError: true })
const { authSchema } = require('../schemas/authSchema')
const { auth } = require('../controllers/auth')

router.post('/', validator.body(authSchema), auth)

module.exports = router