const express = require('express')
const router = express.Router()

const URLRecord = require('../../models/urlrecord')
const randomShortURL = require('../../public/javascripts/randomShortURL')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/shorten', (req, res) => {
  let inputURL = req.body.inputURL
  let shortURL = ''

  // check input url last char is '/'
  if (inputURL.slice(-1) !== '/') {
    inputURL += '/'
  }

  URLRecord.find()
    .lean()
    .then(urls => {
      urls.forEach(item => {
        if (item.url === inputURL) {
          shortURL = item.shortenURL
        }
      })

      // if input url is not found in database, create a record
      if (shortURL === '') {
        shortURL = randomShortURL()
        URLRecord.create({ url: inputURL, shortenURL: shortURL })
      }

      res.render('urlgenerate', { shortURL })
    })
    .catch(error => console.error(error))

})

module.exports = router