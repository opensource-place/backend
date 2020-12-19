const express = require('express')
const got = require('got')
const app = express()

// get env
require('dotenv').config()

// issue route
app.get('/:user/:repo', async (req, res) => {
	const issues = await gatherIssues(req.params.user, req.params.repo)
	res.send(issues)
})

// routers middleware
app.get('/', (req, res) => res.send('Hello World!'))

// gather issues
async function gatherIssues(user, repo) {
	const url = `https://api.github.com/repos/${user}/${repo}/issues`
	const res = await got(url)
	return JSON.parse(res.body)
}

// listen
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`running on ${PORT}`));
