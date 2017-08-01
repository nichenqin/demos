const sha1 = require("sha1");

const User = require("../models/user");

const initSuperUser = async ({ password = "password" } = {}) => {
  const existingSuperUser = await User.findOne({
    where: { name: "nichenqin" }
  });
  if (!!existingSuperUser) {
    return;
  }

  await User.create({
    name: "nichenqin",
    passwordHash: sha1(password)
  });
};

module.exports = { initSuperUser };
