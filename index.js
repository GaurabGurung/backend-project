require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

const github = {
  login: "GaurabGurung",
  id: 119294495,
  node_id: "U_kgDOBxxKHw",
  avatar_url: "https://avatars.githubusercontent.com/u/119294495?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/GaurabGurung",
  html_url: "https://github.com/GaurabGurung",
  followers_url: "https://api.github.com/users/GaurabGurung/followers",
  following_url:
    "https://api.github.com/users/GaurabGurung/following{/other_user}",
  gists_url: "https://api.github.com/users/GaurabGurung/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/GaurabGurung/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/GaurabGurung/subscriptions",
  organizations_url: "https://api.github.com/users/GaurabGurung/orgs",
  repos_url: "https://api.github.com/users/GaurabGurung/repos",
  events_url: "https://api.github.com/users/GaurabGurung/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/GaurabGurung/received_events",
  type: "User",
  site_admin: false,
  name: "Gaurab Gurung",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 27,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-11-28T09:31:12Z",
  updated_at: "2024-03-30T05:19:26Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Gaurab Gurung");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please login in at Maxflix </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Okay you are in youtube now</h2>");
});

app.get("/github", (req, res) => {
  res.json(github);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
