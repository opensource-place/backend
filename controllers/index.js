const addRepository = require('./add-repository')
const getIssues = require('./get-issues')
const getRepositories = require('./get-repositories')
const getLabels = require('./get-labels')
const getSpecificRepository = require('./get-specific-repository')

module.exports = {
  addRepository,
  getIssues,
  getRepositories,
  getLabels,
  getSpecificRepository
}
