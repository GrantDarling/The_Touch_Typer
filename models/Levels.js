const mongoose = require('mongoose');

const levelsSchema = new mongoose.Schema({
  difficulty: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Array,
    required: true,
  },
  unlocked: {
    type: Boolean,
    required: true,
  },
  test: {
    type: Array,
  },
});

module.exports = Levels = mongoose.model('levels', levelsSchema);
