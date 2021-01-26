const mongoose = require('mongoose')

const Repository = new mongoose.Schema({
  pathname: {
    type: String,
    required: true
  },
  issues: {
    type: Array,
    required: true
  },
  updatedTime: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('repo', Repository)
