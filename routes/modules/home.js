const express = require('express')
const router = express.Router()

const URLRecord = require('../../models/urlrecord')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/shorten', (req, res) => {
  const inputURL = req.body.inputURL
  res.render('urlgenerate')
})

module.exports = router