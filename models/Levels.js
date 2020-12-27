const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
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
});

module.exports = Levels = mongoose.model('levels', levelSchema);
