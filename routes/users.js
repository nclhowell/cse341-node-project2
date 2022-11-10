const express = require('express');
const router = express.Router();
const userController = require('../controllers/Users');
const validation = require('../middleware/validate');

router.get('/', userController.getAll);

router.get('/:id', userController.getSingle);

router.post('/', userController.createSingle);

router.put('/:id', userController.updateSingle);
// router.post('/', validation.saveMtb, userController.createSingle);

// router.put('/:id', validation.saveMtb, userController.updateSingle);

router.delete('/:id', userController.deleteSingle);

module.exports = router;