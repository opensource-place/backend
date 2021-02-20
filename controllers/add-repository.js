const { Repository } = require('../models')
const { getIssues, getForkStarDesc, getLanguages, getContributors } = require('../utils')

const algoliasearch = require('algoliasearch')

const client = algoliasearch(process.env.ALGOLIA_KEY_ONE, process.env.ALGOLIA_KEY_TWO)
const index = client.initIndex('repository')

const addRepository = async (url) => {
  const { host, pathname } = new URL(url)

  if (host !== 'github.com') {
    throw new Error(
      'Provide valid GitHub repository like: https://github.com/opensource-place/frontend'
    )
  }

  const [user, repository] = pathname.slice(1).split('/')

  const issues = await getIssues(user, repository).catch((err) => {
    console.log(err)
    throw new Error('Error when getting issues')
  })

  const { stargazers_count, forks_count, description } = await getForkStarDesc(
    user,
    repository
  ).catch((err) => {
    console.log(err)
    throw new Error('Error when getting fork, stargazers count and description')
  })

  const languages = await getLanguages(user, repository).catch((err) => {
    console.log(err)
    throw new Error('Error when getting languages')
  })

  const contributors = await getContributors(user, repository).catch((err) => {
    console.log(err)
    throw new Error('Error when getting contributors')
  })

  await Repository.findOneAndUpdate(
    { pathname },
    {
      issues,
      pathname,
      stargazers_count,
      forks_count,
      description,
      languages,
      contributors
    },
    { upsert: true }
  ).catch((err) => {
    console.log(err)
    throw new Error('Error when upserting document')
  })

  index
    .saveObjects(
      [
        {
          issues,
          pathname,
          stargazers_count,
          forks_count,
          description,
          languages,
          contributors,
          objectID: pathname
        }
      ],
      { autoGenerateObjectIDIfNotExist: false }
    )
    .then()
    .catch((err) => {
      console.log(err)
      throw new Error('Error while saving through to algolia')
    })

  return issues
}

module.exports = addRepository
