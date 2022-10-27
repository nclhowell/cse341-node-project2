const express = require('express');
const router = express.Router();
const mountainBikesController = require('../controllers/mountainBikes');
const validation = require('../middleware/validate');

router.get('/', mountainBikesController.getAll);

router.get('/:id', mountainBikesController.getSingle);

router.post('/', validation.saveMtb, mountainBikesController.createSingle);

router.put('/:id', validation.saveMtb, mountainBikesController.updateSingle);

router.delete('/:id', mountainBikesController.deleteSingle);

module.exports = router;