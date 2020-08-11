const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlrecordSchema = new Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  shortenURL: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('UrlRecord', urlrecordSchema)