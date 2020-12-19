const Repo = require('../models/Repo')

const addData = (req, res) => {
    const repo = new Repo({
        userName: 'furkanportakal',
        repoName: 'deneme'
    })

    repo.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = addData