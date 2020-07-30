const express = require('express')
const router = express.Router()

const { userCreateSchema } = require('../schemas/userSchema')
const validator = require('express-joi-validation').createValidator({passError: true})
const { addUser } = require('../controllers/users')

router.post('/', validator.body(userCreateSchema), addUser)

module.exports = router