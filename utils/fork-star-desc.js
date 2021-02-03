const axios = require('axios')

async function getForkStarDesc (user, repository) {
  try {
    const url = await axios.get(
      `https://api.github.com/repos/${user}/${repository}`
    )
    return url.data
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getForkStarDesc
