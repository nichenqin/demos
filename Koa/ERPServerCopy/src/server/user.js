const sha1 = require("sha1");
const randomstring = require("randomstring");

const User = require("../models/user");

const randomToken = () =>
  `${randomstring.generate(20)}${Date.now()}${randomstring.generate(20)}`;

const initSuperUser = async ({ password = "password" } = {}) => {
  const existingSuperUser = await User.findOne({
    where: { name: "nichenqin" }
  });
  if (!!existingSuperUser) {
    return;
  }

  await User.create({
    name: "nichenqin",
    passwordHash: sha1(password),
    token: randomToken()
  });

  console.log("super user nichenqin created");
};

module.exports = { initSuperUser, randomToken };
