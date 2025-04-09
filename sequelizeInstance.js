// sequelizeInstance.js
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance, pointing to your database
const sequelize = new Sequelize('postgres://user:password@localhost:5432/mydb');

module.exports = sequelize;
