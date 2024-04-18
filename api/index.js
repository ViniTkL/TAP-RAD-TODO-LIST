const mongoose = require("mongoose")
const ToDo = require("./modelos/todo")
const cors = require("cors")

const setup = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/toDoTasks")
    
    const express = require("express")
    const server = express()

    server.use(cors())
    server.use(express.json())

    server.get("/todos", async (req, res) => {
        const todos = await ToDo.find({})
        res.send(todos)
    })

    server.post("/todo", (req, res) => {
        const {
            title,
            description,
            priority,
            categorie,
            done,
            date,
            hour
        } = req.body
        
        const todo = new ToDo({
            title,
            description,
            priority,
            categorie,
            done,
            date,
            hour
        })

        todo.save()
        res.status(200).send(todo)

    })
    
    server.put('/todo', (req, res) => {
        const {_id} = req.body;

        const todo = ToDo.findById(_id);

        todo.done = true;

        todo.save()

        console.log('todo: ', todo, 'atualizado com sucesso.' );
        res.status(200).send(todo)

    })
    
    
    
    server.listen(3000)
}

setup();