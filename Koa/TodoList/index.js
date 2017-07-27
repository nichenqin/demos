const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");

const app = new Koa();
const router = new Router();

app.use(views(__dirname + "/views", { extension: "handlebars" }));

router.get("/", async ctx => {
  await ctx.render("index", { title: "hello world" });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(5000, () => {
  console.log("App runs");
});
