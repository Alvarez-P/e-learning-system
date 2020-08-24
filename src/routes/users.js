const express = require('express')
const router = express.Router()

const { userCreateSchema, userGetSchema, userGetByIdSchema } = require('../schemas/userSchema')
const validator = require('express-joi-validation').createValidator({ passError: true })
const { addUser, getUser, getUserById } = require('../controllers/users')
const { validateIfEmailExists } = require('../middlewares/validate-users')
const validatePermissions = require('../middlewares/validate-permissions')

router.post('/', validator.body(userCreateSchema), validateIfEmailExists, addUser)
router.get('/', validator.query(userGetSchema), getUser)
router.get('/:id', validatePermissions('admin'), validator.params(userGetByIdSchema), getUserById)

module.exports = router