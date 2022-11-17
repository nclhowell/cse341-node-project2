const express = require('express');
const router = express.Router();

router.use('/mountainBikes', require('./mountainBikes'))
router.use('/users', require('./users'))
router.use('/bikes', require('./bikes'))
router.use('/helmets', require('./helmets'))
router.use('/swagdocs', require('./swag'))

module.exports = router;