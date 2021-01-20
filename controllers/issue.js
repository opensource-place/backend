const got = require("got");

// gather issues
async function gatherIssues(user, repo) {
  const url = `https://api.github.com/repos/${user}/${repo}/issues`;
  const res = await got(url);
  return JSON.parse(res.body);
}

module.exports = { gatherIssues };
