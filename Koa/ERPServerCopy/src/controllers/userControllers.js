const User = require("../models/user");

const userControllers = {
  getAll: async (ctx, next) => {
    const users = await User.findAll();
    ctx.body = { users };
  },

  createUser: async (ctx, next) => {
    const { name, age } = ctx.request.body;
    const existingUser = await User.findOne({
      where: { name }
    });
    if (!!existingUser) throw new Error("该用户已存在");
    const newUser = await User.create({
      name,
      age
    });
    ctx.body = { newUser };
  }
};

module.exports = userControllers;
