const Repo = require('../models/Repo')

const allData = (req, res) => {
    Repo.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = allData