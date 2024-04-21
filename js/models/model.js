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

     async init(){
        const toDoList = await fetch('http://localhost:3000/todos')
            .then(result => result.json())
            .then( result2 => {return result2})
            .catch(err => console.error(err));
        
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
        .then(data => data)
        .catch(err => {
            console.error(err); 
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
        .then(data => data)
        .catch(err => {
            console.error(err); 
        });
    }
}