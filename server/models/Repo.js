const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RepoSchema = new Schema({
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
