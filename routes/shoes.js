const express = require('express');
const router = express.Router();
const shoesController = require('../controllers/shoes');
const validation = require('../middleware/validate');
const {auth, requiresAuth} = require("express-openid-connect");

router.get('/', requiresAuth(), shoesController.getAll);

router.get('/:id', requiresAuth(), shoesController.getSingle);

router.post('/', requiresAuth(), validation.createUpdateShoes, shoesController.createSingle);

router.put('/:id', requiresAuth(), validation.createUpdateShoes, shoesController.updateSingle);

router.delete('/:id', requiresAuth(), shoesController.deleteSingle);

module.exports = router;