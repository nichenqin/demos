const Sequelize = require("sequelize");

const sequelize = require("../db");

const User = sequelize.define("users", {
  name: { type: Sequelize.STRING, allowNull: false },
  passwordHash: Sequelize.STRING,
  type: { type: Sequelize.STRING, defaultValue: "一般用户", allowNull: false },
  token: Sequelize.STRING
});

module.exports = User;
