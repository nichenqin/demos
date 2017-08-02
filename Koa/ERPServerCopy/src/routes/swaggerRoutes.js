const swaggerControllers = require("../controllers/swaggerControllers");

module.exports = router => {
  router.get("/swagger-json", swaggerControllers.getJSON());

  router.get("/swagger-html", swaggerControllers.getHtml);
};
