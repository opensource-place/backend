const axios = require('axios')

async function getForkStarDesc (user, repository) {
  const url = await axios.get(
    `https://api.github.com/repos/${user}/${repository}`
  )
  return url.data
}

module.exports = getForkStarDesc
