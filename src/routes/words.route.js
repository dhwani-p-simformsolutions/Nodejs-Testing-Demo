
const express = require('express');
const router = express.Router();
const wordController = require('../controller/word.controller');

router.post('/', wordController.addword);
router.get('/', wordController.findwords);
router.get('/:id', wordController.findwordById);
router.put('/:id', wordController.updateword);
router.delete('/:id', wordController.deleteById);

module.exports = router;
