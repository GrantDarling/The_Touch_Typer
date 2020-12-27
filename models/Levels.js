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
  achievements: {
    type: String,
    required: true,
  },
  // url
});

module.exports = Levels = mongoose.model('levels', levelSchema);
