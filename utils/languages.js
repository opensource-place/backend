const axios = require('axios')

async function getLanguages (user, repository) {
  try {
    const url = await axios.get(`https://api.github.com/repos/${user}/${repository}/languages`)
    return url.data
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getLanguages
