const { Repository } = require('../models')

module.exports = (pathname, label) =>
  Repository.findOne({ pathname }).catch((err) => {
    console.log(err)
    throw new Error('Error when upserting document')
  })
