class homeController{
    constructor(){
        this.toDoController = new taskController();

        this.toDosModel = new model();        

        this.showTodosCreatedBefore();

        this.toDoController.drag();
    }

    async showTodosCreatedBefore(){
        const todosCreated = await this.getTodos();    
        console.log('todosCreated', todosCreated);   
        
        if(todosCreated.length){
            console.log('não aplica vazio');
            todosCreated.forEach(toDo => {
                const {title, description, priority, categorie, done, date, hour, _id} = toDo;
                const dayCreated = this.toDoController.formatToDoDate(date);
                
                this.toDoController.toggleHomes();
                
                this.toDoController.createToDoListDay({title, description, priority, categorie, done, dayCreated, hour, _id});                
            });
            
        }else{
            this.toDoController.homeWithTodos.classList.add('vazio');
        }
        
    }

    async getTodos(){
        const toDos = await this.toDosModel.init()

        return toDos;
    }
}