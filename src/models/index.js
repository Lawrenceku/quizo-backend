const configuration = require('../config/db.config.js');
const db = require("../models");

const Sequelize = require('sequelize');

const sequelize = new Sequelize(configuration.DB, configuration.USER, configuration.PASSWORD, {
  host: configuration.HOST,
  dialect: configuration.dialect,
  // logging: console.log,
  pool: {
    max: configuration.pool.max,
    min: configuration.pool.min,
    acquire: configuration.pool.acquire,
    idle: configuration.pool.idle
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model')(sequelize, Sequelize);

module.exports = db;