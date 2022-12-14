const express = require('express');
const router = express.Router();
const userRecommendationController = require('../controllers/recommendations');

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

router.get('/:surfaceType/:terrainType/:terrainLevel', requiresAuth(), userRecommendationController.getRecomendation);

module.exports = router;