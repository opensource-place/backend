/* eslint-disable */
// const got = require('got')
const axios = require('axios');

// gather issues
async function getIssues (user, repository) {

  let config = {
    headers: {
      Authorization: 'token 4b735e1c006861a6e668b9f74e8ed191e8a897d4',
    }
  }

  const url = await axios.get(`https://api.github.com/repos/${user}/${repository}/issues?state=all&per_page=1&page=1`, config)
  // Max page number that we can take from GitHub API
  const pages = Math.ceil(url.data[0].number / 100)

  for (let i = pages; i > 0; i--) {
    console.log('-----------------------------------')
    const newUrl = await axios.get(`https://api.github.com/repos/${user}/${repository}/issues?state=all&per_page=99&page=${i}`, config)
    console.log(newUrl.data)
  }

}

module.exports = getIssues
