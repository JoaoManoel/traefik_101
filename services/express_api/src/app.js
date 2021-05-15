require('dotenv').config()

const express = require('express')

const app = express()
const PORT = process.env.PORT || 3030

const db = require('./db')

function random(min, max) {
  return Math.random() * (max - min) + min;
}

app.get('/', (req, res) => {
  const { headers }= req
  res.json({
    status: 'OK',
    message: 'Express server...',
    headers
  })
})

app.get('/inventory', async (req, res) => {
  try {
   const { rows } = await db.query('SELECT * FROM inventory', [])
   res.json(rows)
  } catch (err) {
    res.status(500).json({ err })
  }
})

app.get('/health', (req, res) => {
  res.status(random(0, 10) < 7 ? 500 : 200).json({})
})

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`)
})