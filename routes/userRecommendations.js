const express = require('express');
const router = express.Router();

//const getUserInfo = require('../helpers/functions');
const getUserInfo = require('../controllers/recommendations');
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

router.use(auth(config));

//router.get('/:bike,:helmet,:shoes', requiresAuth(), getUserInfo.displayUserRecommendations);
router.get('/:bike,:helmet,:shoes', requiresAuth(), getUserInfo.foo);

module.exports = router;