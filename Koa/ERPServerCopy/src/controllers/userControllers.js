const User = require("../models/user");
const sha1 = require("sha1");
const { randomToken } = require("../server/user");

const userControllers = {
  getAll: async ctx => {
    const users = await User.findAll();
    ctx.body = { users };
  },

  createUser: async ctx => {
    const { name, password } = ctx.request.body;
    const existingUser = await User.findOne({
      where: { name }
    });
    if (!!existingUser) throw new Error("该用户已存在");
    const newUser = await User.create({
      name,
      passwordHash: sha1(password),
      token: randomToken()
    });
    ctx.body = { newUser };
  }
};

module.exports = userControllers;
