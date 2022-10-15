const express = require('express');
const router = express.Router();

const mountainBikesController = require('../controllers/mountainBikes');

router.get('/', mountainBikesController.getAll);

router.get('/:id', mountainBikesController.getSingle);

router.post('/', mountainBikesController.createSingle);

router.put('/:id', mountainBikesController.updateSingle);

router.delete('/:id', mountainBikesController.deleteSingle);

module.exports = router;