'use strict'
const express = require('express')
const api = express.Router()
const routerUser = require('./users')
const routerAuth = require('./auth')
const routerCourseTemplates = require('./coursesTemplates')
const routerEnrollments = require('./enrollments')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

api.use('/docs', swaggerUi.serve);
api.get('/docs', swaggerUi.setup(swaggerDocument));
api.use('/users', routerUser)
api.use('/auth', routerAuth)
api.use('/course-templates', routerCourseTemplates)
api.use('/enrollments', routerEnrollments)
api.get('/', (req, res) => { res.send({ message: 'Home' }); });

module.exports = api