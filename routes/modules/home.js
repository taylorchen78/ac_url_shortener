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
      const shortURLArray = []

      urls.forEach(item => {
        shortURLArray.push(item.shortenURL)
        if (item.url === inputURL) {
          shortURL = item.shortenURL
        }
      })

      // if input url is not found in database, create a record
      if (shortURL === '') {
        do {
          shortURL = randomShortURL()
        } while (shortURLArray.includes(shortURL)) // check if shorten url is exist
        URLRecord.create({ url: inputURL, shortenURL: shortURL })
      }

      res.render('urlgenerate', { shortURL })
    })
    .catch(error => console.error(error))

})

router.get('/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL
  URLRecord.find({ shortenURL: shortURL })
    .lean()
    .then(url => {
      if (url.length === 0) { // url not found
        res.redirect('/')
      } else {
        res.redirect(`${url[0].url}`)
      }
    })
    .catch(error => console.error(error))
})

module.exports = router