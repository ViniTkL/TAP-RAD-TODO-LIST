const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    name: String,
    icon: String,
    color: String
})

const toDoSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: Number,
    categorie: [categoriesSchema],
    done: Boolean,
    date: String,
    hour: String 
})

const ToDo = mongoose.model("todos", toDoSchema);

module.exports = ToDo;