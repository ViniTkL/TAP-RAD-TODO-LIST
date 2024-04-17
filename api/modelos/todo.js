const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: Number,
    categorie: String,
    done: Boolean,
    date: String,
    hour: String 
})

const ToDo = mongoose.model("todos", toDoSchema);

module.exports = ToDo;