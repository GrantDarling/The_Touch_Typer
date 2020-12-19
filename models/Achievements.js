const mongoose = require('mongoose');

const medalSchema = new mongoose.Schema({
  bronze: {
    type: Boolean,
    default: false,
    required: true,
  },
  silver: {
    type: Boolean,
    default: false,
    required: true,
  },
  gold: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const sublevelSchema = new mongoose.Schema({
  easy: {
    type: medalSchema,
    required: true,
  },
  intermediate: {
    type: medalSchema,
    required: true,
  },
  advanced: {
    type: medalSchema,
    required: true,
  },
});

const achievementSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true,
  },

  sublevels: {
    type: sublevelSchema,
    required: true,
  },
});

module.exports = Achievements = mongoose.model(
  'achievement',
  achievementSchema
);
