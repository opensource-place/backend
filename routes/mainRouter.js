const express = require("express");
const router = express.Router();

const {
  getAllRepos,
  addRepo,
  getSpecificRepo,
} = require("../controllers/database");

const { githubCallback } = require("../helpers/githubCallback.js");

const notFound = require("./notFound");

// github callback
router.get("/login/success", githubCallback);

// routers middleware
router.get("/", (req, res) => res.send("Hello World!"));

// issues middleware
//router.get("/:user/:repo", getIssues);

// Add new repo
router.post("/repos", addRepo);
// Get repos
router.get("/repos", getAllRepos);
// Get specific repo
router.get("/repos/:reponame", getSpecificRepo);

module.exports = router;
