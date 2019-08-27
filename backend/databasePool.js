const secret = require('./secrets/databaseConfiguration')
const { Pool } = require('pg')

const pool = new Pool({ secret })

module.exports = pool;

