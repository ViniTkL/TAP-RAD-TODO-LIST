const express = require("express")
const mongoose = require("mongoose")
const task = require("./modelos/task")


const setup = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/")
    
    const express = require("express")
    const server = express()

    server.use(express.json())

    
    
    
    server.listen(3000)
}

setup();