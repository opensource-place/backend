const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
    projectID: {
        type: String,
        require: true,
    },
    issues: {
        type: Array,
        require: true,
    },
    updatedTime: {
        type: Date,
        default: new Date(),
    },
});

module.exports = mongoose.model("issue", IssueSchema);