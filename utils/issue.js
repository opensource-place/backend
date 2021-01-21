const got = require("got");

// gather issues
async function getIssues(user, repository) {
  const url = `https://api.github.com/repos/${user}/${repository}/issues`;
  const res = await got(url);
  return JSON.parse(res.body);
}

module.exports = getIssues;
