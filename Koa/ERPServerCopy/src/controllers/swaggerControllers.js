const swaggerJSDoc = require("swagger-jsdoc");
const swaggerHTML = require("../server/swaggerHTML")();

const swaggerControllers = {
  getJSON: (
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
  },
  getHtml: async ctx => {
    ctx.body = swaggerHTML;
  }
};

module.exports = swaggerControllers;
