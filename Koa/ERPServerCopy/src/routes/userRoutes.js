const userControllers = require("../controllers/userControllers");

module.exports = router => {
  router.get("/", async ctx => {
    ctx.body = { hi: "there" };
  });

  /**
 * @swagger
 * /user:
 *   get:
 *     description: Returns all users
 *     responses:
 *       200:
 *         description: get all users
 */
  router.get("/user", userControllers.getAll);

  /**
   * @swagger
   * /user/new:
   *   post:
   *     description: create new user
   *     parameters:
   *       - name: user
   *         description: User object
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             name:
   *               type: string
   *             password:
   *               type: string
   *               default: 'password'
   *             type:
   *               type: string
   *               default: '一般用户'
   *             avatar:
   *               type: string
   *               default: 'localhost:5001/images/user/default.jpg'
   */
  router.post("/user/new", userControllers.createUser);

  /**
   * @swagger
   * /user/login:
   *   post:
   *     description: login
   *     parameters:
   *       - name: user
   *         description: User object
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             name:
   *               type: string
   *               required: true
   *             password:
   *               required: true
   */
  router.post("/user/login", userControllers.loginUser);

  /**
   * @swagger
   * /user/{id}:
   *   post:
   *     description: edit user
   *     parameters:
   *       - name: id
   *         description: id of user
   *         in: query
   *         required: true
   *         type: number
   *       - name: user
   *         description: User object
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             type:
   *               type: string
   *             avatar:
   *               type: string
   */
  router.post("/user/:id", userControllers.editUser);

  /**
   * @swagger
   * /user/{id}:
   *   delete:
   *     description: delete a user
   *     parameters:
   *       - name: id
   *         description: id of user
   *         in: query
   *         required: true
   *         type: number
   */
  router.delete("/user/:id", userControllers.removeUser);
};
