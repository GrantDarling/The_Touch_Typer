const Achievements = require('../../models/Achievements');

function newAchievementsSchema() {
  let achievements = [];

  for (let i = 0; i < 13; i++) {
    position = 1 + i;
    let achievement = new Achievements({
      level: `level ${position}`,
      sublevels: {
        easy: {
          bronze: true,
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

    achievements.push(achievement);
  }
  return achievements;
}

module.exports = newAchievementsSchema;
