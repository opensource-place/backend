const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

const routers = require("./routers");


// Enviroment Variables
dotenv.config({
  path: "./config/env/config.env"
});

const app = express()

const PORT = process.env.PORT;

// Routers Middleware
app.use("/",routers);

app.listen(PORT, () => {
  console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});