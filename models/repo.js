const mongoose = require('mongoose')

const Repository = new mongoose.Schema({
  pathname: {
    type: String,
    require: true
  },
  issues: {
    type: Array,
    require: true
  },
  updatedTime: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('repo', Repository)
