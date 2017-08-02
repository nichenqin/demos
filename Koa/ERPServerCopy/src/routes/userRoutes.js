const userControllers = require("../controllers/userControllers");

module.exports = router => {
  router.get("/", async ctx => {
    ctx.body = { hi: "there" };
  });

  /**
 * @swagger
 * /user:
 *   get:
 *     summary: get all users
 *     tags: 
 *       - User
 *     description: Returns all users
 *     responses:
 *       200:
 *         description: get all users
 */
  router.get("/user", userControllers.getAll);

  /**
 * @swagger
 * /user/register:
 *   post:
 *     summary: create new user
 *     tags:
 *       - User
 *     parameters:
 *       - name: user
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               default: 用户名
 *             password:
 *               type: string
 *               default: 密码
 *             type:
 *               type: string
 *               default: 账户类型
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
   *         type: object
   *         schema:
   *           type: object
   *           properties:
   *             name:
   *               type: string
   *               required: true
   *             password:
   *               type: string
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
   *         type: object
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
