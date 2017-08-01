const userControllers = require("../controllers/userControllers");

module.exports = router => {
  router.get("/", async ctx => {
    ctx.body = { hi: "there" };
  });

  router.get("/user", userControllers.getAll);

  router.post("/user/new", userControllers.createUser);

  router.post("/user/login", userControllers.loginUser);

  router.post("/user/:id", userControllers.editUser);

  router.delete("/user/:id", userControllers.removeUser);
};
