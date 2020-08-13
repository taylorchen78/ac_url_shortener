const URLRecord = require('../urlrecord')
const randomShortURL = require('../../public/javascripts/randomShortURL')
const db = require('../../config/mongoose.js')

const testURL = ['https://www.google.com.tw/', 'https://www.youtube.com/', 'https://tw.alphacamp.co/']

const initURLseeds = []

db.once('open', () => {
  const testShortURLArray = []
  let shortURL = ''

  testURL.forEach(item => {
    do {
      shortURL = randomShortURL()
    } while (testShortURLArray.includes(shortURL)) // check if shorten url is exist
    testShortURLArray.push(shortURL)

    initURLseeds.push({
      url: item,
      shortenURL: shortURL
    })
  })

  URLRecord.insertMany(initURLseeds)
    .then(() => {
      console.log('Shorten URLs are created')
      db.close()
    })
    .catch(error => console.error(error))
})