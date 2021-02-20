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
  stargazers_count: {
    type: Number,
    required: true
  },
  forks_count: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  languages: {
    type: Object,
    required: true
  },
  contributors: {
    type: Array,
    required: true
  },
  updatedTime: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('repo', Repository)
