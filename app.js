const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./src/routes')

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/api', api)

module.exports = app