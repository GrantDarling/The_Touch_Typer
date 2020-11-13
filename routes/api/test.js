const express = require('express');
const router = express.Router();


// @route      Get api/whatever
// @desc       Test route
// @access     Public
router.get('/', (req, res) => res.send('Test route'));

module.exports = router;