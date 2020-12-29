const postgres = require('postgres')
require('dotenv').config()

const sql = postgres(process.env.DATABASE_URL)

module.exports = sql
