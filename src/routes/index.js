
const express = require('express');
const router = express.Router();
const wordsRoutes = require('./words.route');

router.use('/words', wordsRoutes);
module.exports = router;
