const Todo = require("../model/todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json({
      success: true,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);

    res.json({
      success: true,
      data: {
        newTodo,
      },
    });
  } catch (err) {
    res.json({
      success: false,
      meassage: err,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    await todo.save();

    res.json({
      success: true,
      data: {
        todo,
      },
    });
  } catch (err) {
    res.json({
      success: false,
      meassage: err,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    const todos = await Todo.find();
    res.json({
      success: true,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
};

exports.deleteAllTodos = async (req, res) => {
    try {
      const todo = await Todo.deleteMany();
      res.json({
        success: true,
        data:{
            todos:[]
        }
      });
    } catch (err) {
      res.json({
        success: false,
        message: err,
      });
    }
  };
