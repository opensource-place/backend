const express = require('express');
const router = express.Router();

const got = require('got')
const addData = require('../database/addData')
const allData = require('../database/allData')
const singleData = require('../database/singleData')
const issueRouter = require('./issueRouter')
const notFound = require('./notFound')

// routers middleware
router.get('/', (req, res) => res.send('Hello World!'))

// issues middleware
router.get('/:user/:repo', issueRouter)


// Add - Get Mongo
router.get('/add', addData)
router.get('/all', allData)
router.get('/single', singleData)


module.exports = router;
