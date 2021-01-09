require("dotenv").config();
const express = require("express");
const connectDatabase = require("./helpers/connectDatabase");
const mainRouter = require("./routes/mainRouter");
const notFound = require("./routes/notFound.js");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Main Router
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mainRouter);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// Mongo Connection
connectDatabase();

// listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`running on ${PORT}`));
