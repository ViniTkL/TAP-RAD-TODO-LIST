class model{
    constructor(){}

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
        .then(data => console.log(data))
        .catch(err => {
            console.log(err); 
            console.log(newToDo)
        });
    }

    update(_id){
        fetch('http://localhost:3000/todo', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: _id
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log(err); 
            console.log("deu ruim")
        });
    }
}