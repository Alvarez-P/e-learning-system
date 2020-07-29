'use strict'
require('dotenv').config()

const app = require("./app")
const { PORT = 5000 } = process.env

// Start server
app.listen(PORT, () => {
    console.log(`API REST running on http://localhost:${PORT}`)
})