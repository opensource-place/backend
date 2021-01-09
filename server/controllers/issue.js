const got = require('got')

const getIssues = async (req, res) => {
    const issues = await gatherIssues(req.params.user, req.params.repo)

    //not best, better can be done
    let x = ``
    let y = `<br>`
    for (let i = 0; i < Object.keys(issues).length ; i++) {
        x += `${issues[i].title} ${y}`
    }

    res.send(x)
}


// gather issues
async function gatherIssues(user, repo) {
    const url = `https://api.github.com/repos/${user}/${repo}/issues`
    const res = await got(url)
    return JSON.parse(res.body)
}

module.exports = { getIssues };
