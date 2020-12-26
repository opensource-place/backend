require('dotenv').config({ path: './config/env/config.env' });
const express = require('express')
const connectDatabase = require('./helpers/connectDatabase');
const mainRouter = require('./routes/mainRouter');
const notFound = require('./routes/notFound.js');
const app = express()

// Main Router
app.use(mainRouter)

// Mongo Connection
connectDatabase()

// listen
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`running on ${PORT}`));
