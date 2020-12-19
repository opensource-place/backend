const express = require('express')
const got = require('got')
const dotenv = require('dotenv')
const connectDatabase = require('./helpers/connectDatabase')
const addData = require('./database/addData')
const allData = require('./database/allData')
const singleData = require('./database/singleData')
const app = express()

// get env
dotenv.config({
    path: './config/env/config.env'
})

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

// Mongo Connection
connectDatabase()

// Add - Get Mongo
app.get('/add', addData)
app.get('/all', allData)
app.get('/single', singleData)

// listen
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`running on ${PORT}`))
