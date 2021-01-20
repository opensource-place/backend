const express = require("express");
const router = express.Router();

const {
    getAllRepos,
    addDataToDB,
    getSingleDataToDB,
    addRepo,
} = require("../controllers/database");

const { githubCallback } = require("../helpers/githubCallback.js");
const { getIssues } = require("../controllers/issue");
const notFound = require("./notFound");

// github callback
router.get("/login/success", githubCallback);

// routers middleware
router.get("/", (req, res) => res.send("Hello World!"));

// issues middleware
//router.get("/:user/:repo", getIssues);

// issue add
router.post("/start/repos", addRepo);
router.get("/start/repos", getAllRepos);

// Add - Get Mongo
router.get("/add", addDataToDB);
router.get("/single", getSingleDataToDB);

module.exports = router;
