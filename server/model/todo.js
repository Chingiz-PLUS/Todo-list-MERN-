const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, "Text must be defined!"],
        unique: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})


const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;