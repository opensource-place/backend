const Repo = require("../models/Repo");

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

const getAllDataToDB = (req, res) => {
    Repo.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
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

const addIssues = (req, res) => {
    console.log(req.body);
    // res.send(req.body);
    // const url = req.body.url;
    // const pars = url.split("/");
    //
    // const repo = new Repo({
    //     userName: pars[3],
    //     repoName: pars[4],
    // });
    //
    // repo.save()
    //     .then((result) => {
    //         res.send(result);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
};

module.exports = { getSingleDataToDB, getAllDataToDB, addDataToDB, addIssues };
