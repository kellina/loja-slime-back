const express = require('express') ///express -> servidor web
const cors = require('cors')
require('dotenv').config()
const initRoutes = require('./routers')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

initRoutes(app)

module.exports = app
