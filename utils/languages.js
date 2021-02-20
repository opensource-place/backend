const axios = require('axios')

async function getLanguages(user, repository) {
  const config = {
    headers: {
      accept: 'application/json',
      authorization: 'token ' + process.env.GITHUB_TOKEN
    }
  }
  try {
    const url = await axios.get(
      `https://api.github.com/repos/${user}/${repository}/languages`,
      config
    )
    return url.data
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getLanguages
