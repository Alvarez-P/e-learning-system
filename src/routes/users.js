const express = require('express')
const router = express.Router()

const { userCreateSchema, userGetSchema } = require('../schemas/userSchema')
const validator = require('express-joi-validation').createValidator({ passError: true })
const { addUser, getUser } = require('../controllers/users')

router.post('/', validator.body(userCreateSchema), addUser)
router.get('/', validator.query(userGetSchema), getUser)

module.exports = router