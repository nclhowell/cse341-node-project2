const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const port = process.env.PORT || 3000;
const app = express();
require("dotenv").config();
const {auth, requiresAuth} = require("express-openid-connect");
// const { auth, requiresAuth } = require('express-openid-connect');

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET, 
  baseURL: process.env.BASE_URL, 
  clientID:  process.env.CLIENT_ID, 
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user)); 
  console.log(JSON.stringify(req.oidc.user.given_name)); 
});
