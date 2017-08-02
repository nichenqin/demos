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
    console.log(ctx.header);
    const users = await User.findAll();
    ctx.body = { users };
  },

  createUser: async ctx => {
    const { name, password, type } = ctx.request.body;
    const existingUser = await User.findOne({
      where: { name }
    });
    if (!!existingUser) throw new Error("该用户已存在");
    const newUser = await User.create({
      name,
      type,
      passwordHash: sha1(password),
      token: randomToken()
    });
    ctx.body = { user: newUser };
  },

  loginUser: async ctx => {
    const { name, password } = ctx.request.body;

    const user = await User.findOne({
      where: { name, passwordHash: sha1(password) }
    });
    if (!user) throw new ForbiddenError("帐号或密码错误");

    ctx.body = { user };
  },

  editUser: async ctx => {
    const { id } = ctx.params;
    const { body } = ctx.request;

    const user = await User.findOne({ where: { id } });
    if (!user) throw new NotFoundError(`用户id为${id}的用户`);

    console.log(ctx.user);
    if (ctx.user.type !== "超级管理员") throw new ForbiddenError("不是超级管理员");

    Object.assign(user, body);
    await user.save();
    ctx.body = { user };
  },

  removeUser: async ctx => {
    const { id } = ctx.params;
    const user = await User.findOne({ where: { id } });

    if (!user) throw new NotFoundError(`用户id为${id}的用户`);
    if (ctx.user.type !== "超级管理员") throw new AuthError();

    await user.destroy();

    ctx.body = { msg: "删除成功" };
  }
};

module.exports = userControllers;
