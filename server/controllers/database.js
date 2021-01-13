const Repo = require("../models/repo");
const Issue = require("../models/issue");
const { gatherIssues } = require("./issue");
const checkEmptyField = require("../utils/checkEmptyField");

const addDataToDB = (req, res) => {
    const repo = new Repo({
        userName: "furkanportakal",
        repoName: "deneme",
    });

    repo.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

const getAllRepos = async (req, res) => {
    try {
        const allRepos = await Repo.find();
        res.send(allRepos);
    } catch (error) {
        res.send(error);
    }
};
const getSingleDataToDB = (req, res) => {
    Repo.findById("5fde4264f6f6a52c442654c6")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

const addRepo = async (req, res) => {
    const { url } = req.body;
    const checkEmptyArea = checkEmptyField(url);
    if (checkEmptyArea) {
        const pars = url.split("/");
        const repo = new Repo({
            userName: pars[3],
            repoName: pars[4],
        });
        try {
            const repoSave = await repo.save();
            const projectIssues = await gatherIssues(
                repoSave.userName,
                repoSave.repoName
            );
            const issue = new Issue({
                projectID: repoSave._id,
                issues: projectIssues,
            });
            const issueSave = await issue.save();
            res.json({
                issueSave,
                result: true,
                msg: "registered successfully.",
            });
        } catch (error) {
            console.log(error);
        }
    } else {
        res.json({ result: true, msg: "Fields cannot be empty." });
    }
};

module.exports = { getSingleDataToDB, getAllRepos, addDataToDB, addRepo };
