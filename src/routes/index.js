'use strict'

const express = require('express')
const api = express.Router()

api.get('/', (req, res) => { res.send({ message: 'Home' }); });

module.exports = api