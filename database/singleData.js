const Repo = require('../models/Repo')

const singleData = (req, res) => {
    Repo.findById('5fde4264f6f6a52c442654c6')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = singleData