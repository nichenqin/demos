const User = require("../models/user");
const sha1 = require("sha1");
const { randomToken } = require("../server/user");
const { ForbiddenError } = require("../class/expections");

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
  },

  loginUser: async ctx => {
    const { name, password } = ctx.request.body;

    const user = await User.findOne({
      where: { name, passwordHash: sha1(password) }
    });
    if (!user) throw new ForbiddenError("帐号或密码错误");

    ctx.body = { user };
  }
};

module.exports = userControllers;
