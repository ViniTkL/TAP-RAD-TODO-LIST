const express = require("express")
const mongoose = require("mongoose")
const Task = require("./modelos/task")


const setup = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/toDoTasks")
    
    const express = require("express")
    const server = express()

    server.use(express.json())

    server.get("/tasks", async (req, res) => {
        const tasks = await Task.find({})
        res.send(tasks)
    })

    server.post("/task", (req, res) => {
        const {
            title,
            description,
            priority,
            categorie,
            done
        } = req.body
        
        const task = new Task({
            title,
            description,
            priority,
            categorie,
            done
        })

        task.save()
        res.status(200).send(task)

    })

    
    
    
    server.listen(3000)
}

setup();