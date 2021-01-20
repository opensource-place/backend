const mongoose = require("mongoose");

// repo Schema
const RepoSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  issues: {
    type: Array,
    require: true,
  },
  repoName: {
    type: String,
    require: true,
  },
  repoSlug: {
    type: String,
  },
  updatedTime: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("repo", RepoSchema);
