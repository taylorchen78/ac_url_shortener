const URLRecord = require('../urlrecord')
const randomShortURL = require('../../public/javascripts/randomShortURL')
const db = require('../../config/mongoose.js')

const testURL = ['https://www.google.com.tw/', 'https://www.youtube.com/', 'https://tw.alphacamp.co/']

const initURLseeds = []

db.once('open', () => {
  testURL.forEach(item => {
    initURLseeds.push({
      url: item,
      shortenURL: randomShortURL()
    })
  })

  URLRecord.insertMany(initURLseeds)
    .then(() => {
      console.log('Shorten URLs are created')
      db.close()
    })
    .catch(error => console.error(error))
})