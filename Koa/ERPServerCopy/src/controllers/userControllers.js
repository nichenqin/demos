const User = require("../models/user");

const userControllers = {
  getAll: async (ctx, next) => {
    const users = await User.findAll();
    ctx.body = { users };
  },

  createUser: async (ctx, next) => {
    console.log(ctx.request.body);
    await next();
  }
};

module.exports = userControllers;
