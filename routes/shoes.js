const express = require('express');
const router = express.Router();
const userController = require('../controllers/shoes');
//const validation = require('../middleware/validate');

router.get('/', shoeController.getAll);

router.get('/:id', shoeController.getSingle);

router.post('/', shoeController.createSingle);

router.put('/:id', shoeController.updateSingle);
// router.post('/', validation.saveMtb, userController.createSingle);

// router.put('/:id', validation.saveMtb, userController.updateSingle);

router.delete('/:id', shoeController.deleteSingle);

module.exports = router;