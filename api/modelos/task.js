const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: Number,
    categorie: String,
    done: Boolean,
    date: String,
    hour: String 
})

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;