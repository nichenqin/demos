const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");

const app = new Koa();
const router = new Router();

const todos = [
  { id: 1, content: "todo1", done: true },
  { id: 2, content: "todo2", done: false },
  { id: 3, content: "todo3", done: false }
];

app.use(views(__dirname + "/views", { extension: "handlebars" }));

router
  .get("/", async ctx => {
    await ctx.render("index", { todos });
  })
  .get("/:id", async ctx => {
    const { id } = ctx.params;
    const todo = todos.find(item => item.id === +id);
    console.log(todo);
    await ctx.render("todo", { todo });
  })
  .post("/", async (ctx, next) => {
    const { id, content, done } = ctx.query;
    todos.push({
      id: id || Date.now(),
      content,
      done: done || false
    });
    await next();
    ctx.redirect("/");
  })
  .delete("/:id", ctx => {
    console.log(ctx.params);
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(5000, () => {
  console.log("App runs");
});
