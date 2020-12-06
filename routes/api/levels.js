const express = require('express');
const router = express.Router();

const Level = require('../../models/Levels');

// @route      Get api/levels
// @desc       View levels
// @access     Public
router.get('/', async (req, res) => {
  console.log('Server running on port 3000');
  try {
    let levels = await Level.find({});
    console.log(levels);
    res.json(levels);
  } catch (error) {
    res.status(400).send('Server error');
  }
});

// @route      Post api/levels
// @desc       Develop levels
// @access     Public
router.post('/', async (req, res) => {
  try {
    const level1 = new Level({
      difficulty: '1',
      title: 'yo',
      content: [],
      unlocked: true,
    });

    const level2 = new Level({
      difficulty: '2',
      title: 'yo',
      content: [],
      unlocked: true,
    });

    await level1.save();
    await level2.save();

    res.send(level1);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
});

module.exports = router;
