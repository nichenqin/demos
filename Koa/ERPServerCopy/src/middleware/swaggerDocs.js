const swaggerJSDoc = require("swagger-jsdoc");

module.exports = (
  { title = "ERP", version = "1.0.0", description = "erp" } = {}
) => async ctx => {
  const swaggerDefinition = {
    info: { title, version, description }
  };
  const option = {
    swaggerDefinition,
    apis: ["src/routes/**/*.js"]
  };
  const swaggerSpec = swaggerJSDoc(option);
  ctx.body = swaggerSpec;
};
