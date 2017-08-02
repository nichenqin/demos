const Router = require("koa-router");

const auth = require("../middleware/auth");

const router = new Router();

require("./swaggerRoutes")(router);
router.use(auth());
require("./userRoutes")(router);

module.exports = router;
