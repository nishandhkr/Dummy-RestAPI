const Sequelize = require('sequelize');
const db = require('../database/database');

const Review = db.define('Review', {
  review_id: {
    type: Sequelize.STRING,
    required: true,
    primarykey: true
  },
  user_id: {
    type: Sequelize.STRING,
    required: true
  },
  business_id: {
    type: Sequelize.STRING,
    required: true
  },
  stars: {
    type: Sequelize.INTEGER,
    required: true
  },
  fuuny: {
    type: Sequelize.INTEGER,
    required: false
  },
  cool: {
    type: Sequelize.INTEGER
  },
  text: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  }
});

module.exports = Review;
