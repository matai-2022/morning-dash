const express = require('express')

const db = require('../db/fruits')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Not a valid API')
})

module.exports = router
