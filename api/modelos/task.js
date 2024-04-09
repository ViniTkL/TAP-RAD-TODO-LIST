const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    toDo: String,
    description: String,
    priority: Number,
    categorie: String
})

const task = mongoose.model("tasks", taskSchema);

module.exports = task;