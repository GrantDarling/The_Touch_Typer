const express = require('express');
const router = express.Router();

const Achievement = require('../../models/Achievements');

router.post('/', async (req, res) => {
  try {
    let achievements = [];

    for (let i = 0; i < 13; i++) {
      position = 1 + i;
      let achievement = new Achievement({
        level: `level ${position}`,
        sublevels: {
          easy: {
            bronze: false,
            silver: false,
            gold: false,
          },
          intermediate: {
            bronze: false,
            silver: false,
            gold: false,
          },
          advanced: {
            bronze: false,
            silver: false,
            gold: false,
          },
        },
      });

      await achievement.save();
      achievements.push(achievement);
    }

    res.send(achievements);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
