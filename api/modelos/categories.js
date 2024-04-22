const mongoose = require("mongoose");



const categoriesSchema = new mongoose.Schema({
    name: String,
    icon: String,
    color: String
})

const Categorie = mongoose.model("categories", categoriesSchema);

module.exports = Categorie;