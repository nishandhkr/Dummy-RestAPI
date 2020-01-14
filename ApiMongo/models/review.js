const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  review_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  business_id: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  fuuny: {
    type: Number,
    required: false
  },
  cool: {
    type: Number
  },
  text: {
    type: String
  },
  date: {
    type: Date
  }
});

const Review = mongoose.model('Review', Schema);
module.exports = Review;
