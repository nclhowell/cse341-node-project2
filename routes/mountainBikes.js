const express = require('express');
const router = express.Router();
const mountainBikesController = require('../controllers/mountainBikes');
const validation = require('../middleware/validate');
const app = express();
require("dotenv").config();
const {auth, requiresAuth} = require("express-openid-connect")

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET, 
    baseURL: process.env.BASE_URL, 
    clientID:  process.env.CLIENT_ID, 
    issuerBaseURL: process.env.ISSUER_BASE_URL
  };
  
  // auth router attaches /login, /logout, and /callback routes to the baseURL
  // app.use(auth(config));
  router.use(auth(config));
  
  // req.isAuthenticated is provided from the auth router
  // router.get('/', (req, res) => {
  //  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  //});

  // app.get('/profile', requiresAuth(), (req, res) => {
  //  res.send(JSON.stringify(req.oidc.user)); 
  //  console.log(JSON.stringify(req.oidc.user.given_name)); 
  // });

router.get('/', requiresAuth(), mountainBikesController.getAll);

router.get('/:id', requiresAuth(), mountainBikesController.getSingle);

router.post('/', requiresAuth(), validation.saveMtb, mountainBikesController.createSingle);

router.put('/:id', requiresAuth(), validation.saveMtb, mountainBikesController.updateSingle);

router.delete('/:id', requiresAuth(), mountainBikesController.deleteSingle);

module.exports = router;