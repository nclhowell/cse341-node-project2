const express = require('express');
const router = express.Router();
const shoesController = require('../controllers/shoes');
//const validation = require('../middleware/validate');

router.get('/', shoesController.getAll);

router.get('/:id', shoesController.getSingle);

router.post('/', shoesController.createSingle);

router.put('/:id', shoesController.updateSingle);
// router.post('/', validation.saveMtb, userController.createSingle);

// router.put('/:id', validation.saveMtb, userController.updateSingle);

router.delete('/:id', shoesController.deleteSingle);

module.exports = router;