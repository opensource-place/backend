# Open Source Place (Back-end)
<p align="center"><img src="https://user-images.githubusercontent.com/56169582/105577347-083cbb80-5d8a-11eb-9973-acf01b2130c1.png" width="180px"/></p>


- We want to build a platform which contents open-source projects. You can list all published open-source projects and also you can publish your project too from GitHub.

## Want to Contribute?

You have 2 things you can do:

1. Either open an issue about a bug, feature request, page, or component,
2. __Or__ close an issue, by writing and/or implementing it in your own fork!


## ⚒️ Build Setup 

We use **yarn** as the package manager

```
yarn install
yarn start
```


## 📙 Features to be added
- [ ] TODO



*Add your repository with JavaScript*

```javascript
fetch("http://localhost:8080/repository", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "content-type": "application/json;charset=UTF-8",
  },
  "referrer": "http://localhost:3000/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"url\":\"https://github.com/expressjs/express\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
})
```

*Read issues in any repository*

```javascript
const query = `{
  issues(pathname: "/cagatay/lazy/") {
    repository_url
    title
    user {
      login
    }
    created_at
  }
}`

fetch(`http://localhost:8080/graphql?query=${query}`).then(res => res.json()).then(console.log)
```
## Linting

> Additionally, you can do `yarn run lint` to see formatting errors
> and `yarn run lint:fix` to fix them.
> Don't worry if you forgot to lint your code!
> Someone will definitely fix it in another commit for you :smiley:
