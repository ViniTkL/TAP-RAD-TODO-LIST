class controller { 
    
    constructor(){
    
    this.View = new view()
    
    this.toDosModel = new model();
   
    this.homeEmpty = document.querySelector('#info-meio')
        
    this.homeWithTodos = document.querySelector('#tasks-criadas')
        
    this.ButtonAddTask = document.querySelector(".btn")

    this.AddTask = document.querySelector(".ButtonAdd")

    this.toDoList = document.querySelector(".toDo-list")

    this.showTask()
    
    this.showTodosCreatedBefore();

} 

    async showTodosCreatedBefore(){
        const isTodosCreated = await this.getTodos();    
        
        console.log('isTodosCreated', isTodosCreated);   
        
        if(isTodosCreated.length >= 1){

            console.log('não aplica vazio');
            isTodosCreated.forEach(toDo => {
                //refatorar aqui - talvez
                const {title, description, priority, categorie, done, date, hour} = toDo;
                const dayCreated = this.formatToDoDate(date);
                
                this.toggleHomes();
                
                this.toDoList.innerHTML += this.View.renderTasks({title, description, priority, categorie, done, dayCreated, hour});
            });

        }else{
            this.homeWithTodos.classList.add('vazio');
        }
    }

    showTask(){
        this.ButtonAddTask.addEventListener("click", () =>{

            this.AddTask.innerHTML += this.View.render()

                this.closeTask()

        })    
        
    }

    closeTask(){

        const SaveIcon = document.querySelector(".save-icon")
        //Tratar e salvar os dados aqui antes de excluir a task 
        
         SaveIcon.addEventListener("click", () =>{ 
            
            const title =  document.querySelector(".name-task").value
            const description = document.querySelector(".description-task").value
            const hour = this.hourFormat(new Date());
            const date = new Date();
            const dayCreated = this.formatToDoDate(date); 
            const priority = 1 // depois pegar do HTML
            const categorie = 'teste' // depois pegar do HTML 
            const done = false;
            // const iconTag || para fazer depois -> fazr função que retorna a classe do icon da tag de acordo com a tag escolhida 
            const ToDo = {title, description, priority, categorie, done, date, hour}
            
            this.toDosModel.save(ToDo)

            this.toDoList.innerHTML += this.View.renderTasks({title, description, priority, categorie, done, dayCreated, hour})
                        
            this.toggleHomes()
            
            this.AddTask.innerHTML = ""
            
        })

    }

    hourFormat(date){
        const minutesWithZero = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
        const hour = date.getHours();
        const minutes = parseInt(date.getMinutes()) < 10 ? minutesWithZero[date.getMinutes()] : date.getMinutes();

        return `${hour}:${minutes}`
    }

    formatToDoDate(date){
        const toDoCreatedDate = ['Hoje', 'Hoje', 'Ontem', '3 dias', '4 dias', '5 dias'];
        const dayInMs = 1000 * 3600 * 24;
        const todayDate = new Date();
        const createdDate = new Date(date)

        // deiferena de tempo em millisegundos entre as datas, o abs e para o valor ser absoluto, ou seja, sempre retorna inteiro mesmo que o resultado seja negativo
        const timeDiff = Math.abs(createdDate.getTime() - todayDate.getTime());

        // diferença de tempo em dias entre as datas
        const diffDays = Math.ceil(timeDiff / dayInMs); 
      
        return toDoCreatedDate[diffDays];
    }

    async getTodos(){
        const toDos = await this.toDosModel.init()
        console.log('constructor:', toDos);
        return toDos;
    }

    toggleHomes(){
        this.homeWithTodos.classList.contains('vazio') ? this.homeWithTodos.classList.remove('vazio')  : ""
        this.homeWithTodos.classList.contains('vazio') ? "" : this.homeEmpty.classList.add('vazio') 
    }
}