'use strict'
const express = require('express')
const api = express.Router()
const routerUser = require('./users')
const routerCourseTemplates = require('./coursesTemplates')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

api.use('/docs', swaggerUi.serve);
api.get('/docs', swaggerUi.setup(swaggerDocument));
api.use('/users', routerUser)
api.use('/course-templates', routerCourseTemplates)
api.get('/', (req, res) => { res.send({ message: 'Home' }); });

module.exports = api