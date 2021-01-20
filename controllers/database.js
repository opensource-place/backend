const Repo = require("../models/repo");
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
    //TODO need to check url is valid for github https://github.com/FurkanPortakal/opensourceadam -> valid, http://google.com/ -> not valid
    const checkEmptyArea = checkEmptyField(url);
    if (checkEmptyArea) {
        const pars = url.split("/");
        try {
            const projectIssues = await gatherIssues(pars[3], pars[4]);
            const repo = new Repo({
                userName: pars[3],
                repoName: pars[4],
                issues: projectIssues,
            });
            const repoSave = await repo.save();

            res.json({
                repoSave,
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
