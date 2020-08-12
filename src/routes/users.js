const express = require('express')
const router = express.Router()

const { userCreateSchema, userGetSchema } = require('../schemas/userSchema')
const validator = require('express-joi-validation').createValidator({ passError: true })
const { addUser, getUser } = require('../controllers/users')
const { validateIfEmailExists } = require('../middlewares/validate-users')
const validatePermissions = require('../middlewares/validate-permissions')

router.post('/', validatePermissions("admin"), validator.body(userCreateSchema), validateIfEmailExists, addUser)
router.get('/', validator.query(userGetSchema), getUser)

module.exports = router