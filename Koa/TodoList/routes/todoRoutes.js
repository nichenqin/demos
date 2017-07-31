const TodoController = require("../controllers/todoController");

module.exports = router => {
  router.get("/", TodoController.index);
  router.get("/:id", TodoController.getTodoDetail);
  router.post("/", TodoController.createTodo);
  router.put("/:id", TodoController.toggleTodoDone);
  router.delete("/:id", TodoController.deleteTodo);
};
