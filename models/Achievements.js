const mongoose = require('mongoose');

const sublevelSchema = new mongoose.Schema({
  bronze: {
    type: Boolean,
    required: true,
  },
  silver: {
    type: Boolean,
    required: true,
  },
  gold: {
    type: Boolean,
    required: true,
  },
});

const sublevelSchema = new mongoose.Schema({
  easy: [medalSchema],
  intermediate: [medalSchema],
  advanced: [medalSchema],
});

const achievementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  medals: [sublevelSchema],
});

module.exports = User = mongoose.model('achievements', achievementSchema);
