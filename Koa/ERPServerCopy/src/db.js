const Sequelize = require("sequelize");

const sequelize = new Sequelize("mysql://root@localhost/test");

module.exports = sequelize;
