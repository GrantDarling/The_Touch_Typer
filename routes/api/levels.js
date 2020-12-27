const express = require('express');
const Achievements = require('../../models/Achievements');
const router = express.Router();

const Level = require('../../models/Levels');

// @route      Get api/levels
// @desc       View levels
// @access     Public
router.get('/', async (req, res) => {
  console.log('Server running on port 3000');
  try {
    let levels = await Level.find({});
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
    // 1. Check if levels exist
    // 2. Send this to frontend

    const level1 = new Level({
      path: 'level1',
      difficulty: '1',
      title: 'F & J',
      description: "Typing challenge with the 'k' and 'j' keys",
      content: [
        'ffj jff j f jfj fj j ff jjj fjfj jjj f ffj jffj jff fj jf jfff jfjf jfj fj j f f jjf',
      ],
      unlocked: true,
    });

    const level2 = new Level({
      path: 'level2',
      difficulty: '2',
      title: 'Home Row',
      description: 'Typing challenge with the home row keys',
      content: [
        'jfds jkds ll;asl sldkfj a;slkdf jfl;sad a;skdjfda aslkdfja asldkjf askdda salkdfa sd',
      ],
      unlocked: false,
    });

    await level1.save();
    await level2.save();

    let levels = [];
    levels.push(level1);
    levels.push(level2);

    res.send(levels);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

/* 
    const level3 = new Level({
      difficulty: 'E & I',
      title: 'S & L',
      content: [],
      unlocked: true,
    });

    const level4 = new Level({
      difficulty: 'W & O',
      title: 'A & ;',
      content: [],
      unlocked: true,
    });

    const level5 = new Level({
      difficulty: 'R & U',
      title: 'A & ;',
      content: [],
      unlocked: true,
    });

    const level6 = new Level({
      difficulty: 'T, Y, G, H',
      title: 'A & ;',
      content: [],
      unlocked: true,
    });

    const level7 = new Level({
      difficulty: 'Capitals & Periods',
      title: 'A & ;',
      content: [],
      unlocked: true,
    });

    const level8 = new Level({
      difficulty: 'Capitals & Periods',
      title: 'C & M',
      content: [],
      unlocked: true,
    });

    const level9 = new Level({
      difficulty: 'Capitals & Periods',
      title: 'X & ,',
      content: [],
      unlocked: true,
    });

    const level10 = new Level({
      difficulty: 'Capitals & Periods',
      title: 'Numbers',
      content: [],
      unlocked: true,
    });

    const level11 = new Level({
      difficulty: 'Capitals & Periods',
      title: 'Z, ?, { }, [ ]',
      content: [],
      unlocked: true,
    });

    const level12 = new Level({
      title: 'V, N, B',
      content: [],
      unlocked: true,
    });

    const level13 = new Level({
      difficulty: '',
      title: 'The Final Test',
      content: [],
      unlocked: true,
    });

*/
