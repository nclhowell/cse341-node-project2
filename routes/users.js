const express = require('express');
const router = express.Router();
const userController = require('../controllers/Users');
const validation = require('../middleware/validate');

router.get('/', userController.getAllUser);

router.get('/:id', userController.getSingleUser);

router.post('/', userController.createSingleUser);

router.put('/:id', userController.updateSingleUser);
// router.post('/', validation.saveMtb, userController.createSingle);

// router.put('/:id', validation.saveMtb, userController.updateSingle);

router.delete('/:id', userController.deleteSingleUser);

module.exports = router;