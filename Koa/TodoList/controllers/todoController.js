const mongoose = require("mongoose");

const Todo = mongoose.model("todos");

module.exports = {
  index: async (ctx, next) => {
    try {
      let todos = await Todo.find({});
      if (!todos.length) {
        await new Todo({ content: "example" }).save();
      }
      todos = await Todo.find({});
      await ctx.render("index", { todos });
      return await next();
    } catch (error) {
      console.log("init error");
    }
  },

  getTodoDetail: async (ctx, next) => {
    const { id } = ctx.params;
    try {
      const todo = await Todo.findById(id);
      await ctx.render("todoDetail", { todo });
      return await next();
    } catch (error) {
      console.log("get detail error");
    }
  },

  createTodo: async (ctx, next) => {
    const { content } = ctx.query;
    try {
      const todo = await new Todo({ content }).save();
      await ctx.render("todoItem", { todo });
      return await next();
    } catch (error) {
      console.log("create error");
    }
  },

  toggleTodoDone: async (ctx, next) => {
    const { id } = ctx.params;
    const done = ctx.query.done === "true";
    try {
      await Todo.findByIdAndUpdate(id, { done });
      const todo = await Todo.findById(id);
      ctx.body = todo;
      return await next();
    } catch (error) {
      console.log("toogle error");
    }
  },

  deleteTodo: async (ctx, next) => {
    const { id } = ctx.params;
    try {
      await Todo.findByIdAndRemove(id);
      const todos = await Todo.find({});
      ctx.body = todos;
      return await next();
    } catch (error) {
      console.log("delete error");
    }
  }
};
