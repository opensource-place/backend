const mongoose = require("mongoose");

// repo Schema
const RepoSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },
    repoName: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("repo", RepoSchema);