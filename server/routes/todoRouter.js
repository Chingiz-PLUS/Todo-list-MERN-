const router = require("express").Router();
const todoController = require("../controller/todoController")

router.get("/",todoController.getAllTodos)

router.post("/",todoController.createTodo)

router.patch("/:id",todoController.updateTodo);

router.delete("/:id", todoController.deleteTodo)

router.delete("/", todoController.deleteAllTodos)


module.exports = router;