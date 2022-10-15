const express = require('express');
const router = express.Router();

router.use('/mountainBikes', require('./mountainBikes'))
router.use('/swagdocs', require('./swag'))

module.exports = router;
