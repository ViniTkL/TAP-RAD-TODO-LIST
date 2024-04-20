class model{
    constructor(){
        this.title = '';
        this.description = '';
        this.priority = 0;
        this.categorie = '';
    }

    setTitle(newTitle){
        this.title = newTitle;
    }

    setDescription(newDesc){
        this.description = newDesc;
    }

    setPriority(newPrio){
        this.priority = newPrio;
    }

    setCategorie(newCat){
        this.categorie = newCat;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getPriority(){
        return this.priority;
    }

    getCategorie(){
        return this.categorie;
    }

    createToDo(){
        const title =  document.querySelector(".name-task").value
        const description = document.querySelector(".description-task").value
        const hour = this.hourFormat(new Date());
        const date = new Date();
        const dayCreated = this.formatToDoDate(date); 
        const priority = 1 // depois pegar do HTML
        const categorie = 'teste' // depois pegar do HTML 
        const done = false;

        this.toDosModel.save({title, description, priority, categorie, done, date, hour})

        return {title, description, priority, categorie, done, dayCreated, hour}
    }

     async init(){
        const toDoList = await fetch('http://localhost:3000/todos')
            .then(result => result.json())
            .then( result2 => {return result2})
            .catch(err => console.error(err));
        
        console.log('toDoList', toDoList);
        return toDoList
    }

     save(newToDo){
        fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToDo)
        })
        .then(response => response.json())
        .then(data => console.log('data', data))
        .catch(err => {
            console.log(err); 
            console.log(newToDo)
        });
    }

    update(_id){
        fetch('http://localhost:3000/todo', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id})
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log(err); 
            console.log("deu ruim")
        });
    }
}