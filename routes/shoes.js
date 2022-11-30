const express = require('express');
const router = express.Router();
const shoesController = require('../controllers/shoes');
const validation = require('../middleware/validate');

router.get('/', shoesController.getAll);

router.get('/:id', shoesController.getSingle);

router.post('/', validation.createUpdateShoes, shoesController.createSingle);

router.put('/:id', validation.createUpdateShoes, shoesController.updateSingle);

router.delete('/:id', shoesController.deleteSingle);

module.exports = router;