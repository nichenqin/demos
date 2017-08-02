const Sequelize = require("sequelize");

const sequelize = require("../db");

const User = sequelize.define("users", {
  name: { type: Sequelize.STRING, allowNull: false },
  passwordHash: Sequelize.STRING,
  type: { type: Sequelize.STRING, defaultValue: "一般用户", allowNull: false },
  awatar: {
    type: Sequelize.STRING,
    defaultValue: "http://localhost:5001/images/user/default.jpg"
  },
  token: Sequelize.STRING
});

module.exports = User;
