const configuration = require('../config/db.config.js');
const Sequelize = require('sequelize');

// Initialize Sequelize with database configuration
const sequelize = new Sequelize(configuration.DB, configuration.USER, configuration.PASSWORD, {
  host: configuration.HOST,
  dialect: configuration.dialect,
  pool: {
    max: configuration.pool.max,
    min: configuration.pool.min,
    acquire: configuration.pool.acquire,
    idle: configuration.pool.idle,
  },
});

// Initialize db object
const db = {};

// Attach Sequelize and sequelize to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.user = require('./user.model')(sequelize, Sequelize);

// Import and initialize quiz models
const { Question, Option } = require('./quiz.model')(sequelize, Sequelize.DataTypes);
db.Question = Question;
db.Option = Option;

// Run associations if they exist
Object.keys(db).forEach((modelName) => {
  if (db[modelName] && db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Export the db object
module.exports = db;