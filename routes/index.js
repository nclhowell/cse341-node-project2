const express = require('express');
const router = express.Router();


router.use('/mountainBikes', require('./mountainBikes'));
router.use('/users', require('./users'));
router.use('/shoes', require('./shoes'));
router.use('/helmets', require('./helmets'));
router.use('/swagdocs', require('./swag'));

module.exports = router;