const express = require('express');
const router = express.Router();

const { courseTemplateCreateSchema } = require('../schemas/courseTemplateSchema');
const validator = require('express-joi-validation').createValidator({passError: true});
const { addCourseTemplate } = require('../controllers/courseTemplate');

router.post('/', validator.body(courseTemplateCreateSchema), addCourseTemplate);

module.exports = router;