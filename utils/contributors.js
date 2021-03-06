const axios = require('axios')

async function getContributors(user, repository) {
  const config = {
    headers: {
      accept: 'application/json',
      authorization: 'token ' + process.env.GITHUB_TOKEN
    }
  }
  try {
    const url = await axios.get(
      `https://api.github.com/repos/${user}/${repository}/contributors`,
      config
    )
    return url.data
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getContributors
