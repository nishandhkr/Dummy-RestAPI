const Sequelize = require('sequelize');

const database = new Sequelize(
  'postgres',
  'postgres',
  '12345',
  {
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    opertatoesAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

module.exports = database;
