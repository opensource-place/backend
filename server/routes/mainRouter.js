const express = require('express');
const router = express.Router();

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
router.get('/add', addDataToDB)
router.get('/all', getAllDataToDB)
router.get('/single', getSingleDataToDB)


module.exports = router;
