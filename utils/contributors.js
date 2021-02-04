const axios = require('axios')

async function getContributors (user, repository) {
  try {
    const url = await axios.get(`https://api.github.com/repos/${user}/${repository}/contributors`)
    return url.data
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getContributors
