const express = require('express');
const router = express.Router();

router.use('/mountainBikes', require('./mountainBikes'))
// router.use('/users', require('./users'))
router.use('/swagdocs', require('./swag'))

module.exports = router;
