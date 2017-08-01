const Sequelize = require("sequelize");

const sequelize = require("../db");

const User = sequelize.define("users", {
  name: Sequelize.STRING,
  passwordHash: Sequelize.STRING,
  token: Sequelize.STRING
});

module.exports = User;
