const { Pool } = require('pg')

const { 
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env

const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}
