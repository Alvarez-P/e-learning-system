'use strict'
const express = require('express')
const api = express.Router()
const routerUser = require('./users')

api.use('/users', routerUser)
api.get('/', (req, res) => { res.send({ message: 'Home' }); });

module.exports = api