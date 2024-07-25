require("dotenv").config();
const express = require("express");
const app = express();
// const port = 4000;
const github = "https://api.github.com/users/tanishqdhawan0912";

const githubdata = {
  login: "TanishqDhawan0912",
  id: 155245805,
  node_id: "U_kgDOCUDc7Q",
  avatar_url: "https://avatars.githubusercontent.com/u/155245805?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/TanishqDhawan0912",
  html_url: "https://github.com/TanishqDhawan0912",
  followers_url: "https://api.github.com/users/TanishqDhawan0912/followers",
  following_url:
    "https://api.github.com/users/TanishqDhawan0912/following{/other_user}",
  gists_url: "https://api.github.com/users/TanishqDhawan0912/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/TanishqDhawan0912/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/TanishqDhawan0912/subscriptions",
  organizations_url: "https://api.github.com/users/TanishqDhawan0912/orgs",
  repos_url: "https://api.github.com/users/TanishqDhawan0912/repos",
  events_url: "https://api.github.com/users/TanishqDhawan0912/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/TanishqDhawan0912/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 11,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-12-30T15:07:14Z",
  updated_at: "2024-07-15T11:23:13Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("tanishqdhawan09");
});

app.get("/login", (req, res) => {
  res.send("<h1>hello how are u</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

app.get("/github", (req, res) => {
  res.json(githubdata.id);
});
