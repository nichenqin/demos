const Router = require("koa-router");

const auth = require("../middleware/auth");
const swaggerDocs = require("../middleware/swaggerDocs");

const router = new Router();

router.get("/swagger-json", swaggerDocs());
router.use(auth());

require("./userRoutes")(router);

module.exports = router;
