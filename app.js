const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./src/routes')
const { handleErrors } = require('./src/middlewares/errors')

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/api', api)
app.use(handleErrors)

module.exports = app