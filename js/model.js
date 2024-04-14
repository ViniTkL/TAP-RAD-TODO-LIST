class model{
    constructor(){}

     init(){
        const toDoList = fetch('http://localhost:3000/tasks')
            .then(result => result.json())
            .then( result2 => console.log(result2))
            .catch(err => console.error(err));
        
        return toDoList
    }

    save(newToDo){
        fetch('http://localhost:3000/task', {
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
}