const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-compelete', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
