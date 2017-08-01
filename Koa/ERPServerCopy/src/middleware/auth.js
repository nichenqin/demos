const User = require("../models/user");
const { AuthError } = require("../class/expections");

module.exports = () => async (ctx, next) => {
  const token = ctx.header.Authorization || ctx.header.authorization;
  if (!token) throw new AuthError();

  const existingUser = await User.findOne({ where: { token } });
  console.log(existingUser);
  if (!existingUser) throw new AuthError();

  ctx.user = existingUser;
  await next();
};