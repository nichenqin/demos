const Router = require("koa-router");

const auth = require("../middleware/auth");

const router = new Router();
router.use(auth());

require("./userRoutes")(router);

module.exports = router;
