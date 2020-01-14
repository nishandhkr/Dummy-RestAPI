const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  review_count: {
    type: Number,
    required: true
  },
  yelping_since: {
    type: Date
  },
  cool: {
    type: Number
  },
  elite: {
    type: Array
  },
  friends: {
    type: Array
  },
  fans: {
    type: Number
  },
  average_stars: {
    type: Number
  },
  compliment_hot: {
    type: Number
  },
  compliment_more: {
    type: Number
  },
  compliment_profile: {
    type: Number
  },
  compliment_cute: {
    type: Number
  },
  compliment_note: {
    type: Number
  },
  compliment_plain: {
    type: Number
  },
  compliment_cool: {
    type: Number
  },
  compliment_funny: {
    type: Number
  },
  compliment_writer: {
    type: Number
  },
  compliment_photos: {
    type: Number
  }
});

const User = mongoose.model('User', Schema);
module.exports = User;
