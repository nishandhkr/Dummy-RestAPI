const Sequelize = require('sequelize');
const db = require('../database/database');

const User = db.define('User', {
  user_id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    required: true
  },
  review_count: {
    type: Sequelize.INTEGER,
    required: true
  },
  yelping_since: {
    type: Sequelize.DATE
  },
  cool: {
    type: Sequelize.INTEGER
  },
  elite: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  friends: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  fans: {
    type: Sequelize.INTEGER
  },
  average_stars: {
    type: Sequelize.FLOAT
  },
  compliment_hot: {
    type: Sequelize.INTEGER
  },
  compliment_more: {
    type: Sequelize.INTEGER
  },
  compliment_profile: {
    type: Sequelize.INTEGER
  },
  compliment_cute: {
    type: Sequelize.INTEGER
  },
  compliment_note: {
    type: Sequelize.INTEGER
  },
  compliment_plain: {
    type: Sequelize.INTEGER
  },
  compliment_cool: {
    type: Sequelize.INTEGER
  },
  compliment_funny: {
    type: Sequelize.INTEGER
  },
  compliment_writer: {
    type: Sequelize.INTEGER
  },
  compliment_photos: {
    type: Sequelize.INTEGER
  }
});

module.exports = User;
