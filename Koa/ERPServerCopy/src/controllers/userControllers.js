const User = require("../models/user");
const sha1 = require("sha1");
const { randomToken } = require("../server/user");
const {
  AuthError,
  ForbiddenError,
  NotFoundError
} = require("../class/expections");

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
  },

  removeUser: async ctx => {
    const { id } = ctx.params;
    const user = await User.findOne({ where: { id } });
    if (!user) throw new NotFoundError(`用户id为${id}的用户`);
    if (ctx.user.name !== "nichenqin") throw new AuthError();

    await user.destroy();

    ctx.body = { msg: "删除成功" };
  }
};

module.exports = userControllers;
