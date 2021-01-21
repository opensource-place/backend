# Open Source Adam

- We want to build a platform which contents open-source projects. You can list all published open-source projects and also you can publish your project too from GitHub.


## ⚒️ Build Setup 

We use **yarn** as the package manager

```
yarn install
yarn start
```

## CSS Library
We use tailwind css as the css library. You can access the documentation [here](https://tailwindcss.com/docs).


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