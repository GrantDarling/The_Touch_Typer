const mongoose = require('mongoose');

const sublevelSchema = new mongoose.Schema({
  text: {
    type: Array,
    required: true,
  },
  unlocked: {
    type: Boolean,
    required: true,
  },
});

const levelSchema = new mongoose.Schema({
  difficulty: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  easy: [sublevelSchema],
  intermediate: [sublevelSchema],
  advanced: [sublevelSchema],
  unlocked: {
    type: Boolean,
    required: true,
  },
});

// const levelsSchema = new mongoose.Schema({
//   level1: [levelSchema],
//   level2: [levelSchema],
//   level3: [levelSchema],
//   level4: [levelSchema],
//   level5: [levelSchema],
//   level6: [levelSchema],
//   level7: [levelSchema],
//   level8: [levelSchema],
//   level9: [levelSchema],
//   level10: [levelSchema],
//   level11: [levelSchema],
//   level12: [levelSchema],
// });

module.exports = Levels = mongoose.model('levels', levelSchema);
