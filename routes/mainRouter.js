const express = require('express');
const router = express.Router();

const got = require('got')
const addData = require('../database/addData')
const allData = require('../database/allData')
const singleData = require('../database/singleData')

// routers middleware
router.get('/', (req, res) => res.send('Hello World!'))

// issue route
router.get('/:user/:repo', async (req, res) => {
    const issues = await gatherIssues(req.params.user, req.params.repo)
    res.send(issues)
})


// Add - Get Mongo
router.get('/add', addData)
router.get('/all', allData)
router.get('/single', singleData)

// gather issues
async function gatherIssues(user, repo) {
    const url = `https://api.github.com/repos/${user}/${repo}/issues`
    const res = await got(url)
    return JSON.parse(res.body)
}




module.exports = router;