const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const server = require("koa-static");
const sequelize = require("./db");
const errorHandle = require("./middleware/errorHandle");
const router = require("./routes");

const { initSuperUser } = require("./server/user");

(async () => {
  try {
    await sequelize.sync({});
    console.log("connected to the database");
    await initSuperUser();
  } catch (error) {
    console.error(error);
  }
})();

const app = new Koa();

app
  .use(server("."))
  .use(bodyParser())
  .use(errorHandle())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(5001, () => {
  console.log(">> App running on http://localhost:5001");
});
