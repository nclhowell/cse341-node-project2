const express = require('express');
const router = express.Router();

const helmetsController = require('../controllers/helmets');
const validation = require('../middleware/validate');
const app = express();

const foo = require('../helpers/functions');

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

router.get('/', requiresAuth(), helmetsController.getAll);

//router.get('/:id', requiresAuth(), helmetsController.getSingle);
//temp code
router.get('/', requiresAuth(), foo.userRecommendations('difficult', 'difficult', 'difficult'));


router.post('/', requiresAuth(), validation.createUpdate, helmetsController.createSingle);

router.put('/:id', requiresAuth(), validation.createUpdate, helmetsController.updateSingle);

router.delete('/:id', requiresAuth(), helmetsController.deleteSingle);


module.exports = router;