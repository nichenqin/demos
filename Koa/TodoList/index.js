const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const mongoose = require("mongoose");

const app = new Koa();
const router = new Router();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todos");
app.use(views(__dirname + "/views", { extension: "handlebars" }));

require("./models/Todo");

require("./routes/todoRoutes")(router);

app.use(router.routes()).use(router.allowedMethods());

app.listen(5000, () => {
  console.log("App runs at http://localhost:5000");
});
