const express = require('express');
const router = express.Router();

const got = require('got')
const data = require("../controllers/database")

const {
    getAllDataToDB,
    addDataToDB,
    getSingleDataToDB
} = require('../controllers/database');

const { getIssues } = require('../controllers/issue')
const notFound = require('./notFound')

// routers middleware
router.get('/', (req, res) => res.send('Hello World!'))

// issues middleware
router.get('/:user/:repo', getIssues)

// Add - Get Mongo
router.get('/add', data.addDataToDB)
router.get('/all', data.getAllDataToDB)
router.get('/single', data.getSingleDataToDB)


module.exports = router;
