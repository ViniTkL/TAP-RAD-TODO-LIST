class controller { 
    
    constructor(){

    this.toDosModel = new model();

    this.ButtonAddTask = document.querySelector(".btn")

    this.View = new view()

    this.AddTask = document.querySelector(".ButtonAdd")

    this.toDoList = document.querySelector(".toDo-list")

    this.showTask()

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
            const date = this.getToDoDate(new Date()); // aqui vai passar essa data ou a data do banco de dados -> se ligar nisso
            const priority = 1 // depois pegar do HTML
            const categorie = 'teste' // depois pegar do HTML 
            const done = false;
            // const iconTag || para fazer depois -> fazr função que retorna a classe do icon da tag de acordo com a tag escolhida 
            const ToDo = {title, description, priority, categorie, done, date, hour}
            const Teste = this.getTodos();
            this.toDosModel.save(ToDo)

            this.toDoList.innerHTML += this.View.renderTasks(ToDo)
            
            alert(`titulo: ${typeof title} description: ${typeof description} date: ${hour} haha: ${date}`)               
            
            this.AddTask.innerHTML = ""
            
        })

    }

    hourFormat(date){
        const minutesWithZero = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
        const hour = date.getHours();
        const minutes = parseInt(date.getMinutes()) < 10 ? minutesWithZero[date.getMinutes()] : date.getMinutes();

        return `${hour}:${minutes}`
    }

    getToDoDate(date){
        const toDoCreatedDate = ['Hoje', 'Hoje', 'Ontem', '3 dias', '4 dias', '5 dias'];
        const dayInMs = 1000 * 3600 * 24;
        const todayDate = new Date();

        // deiferena de tempo em millisegundos entre as datas, o abs e para o valor ser absoluto, ou seja, sempre retorna inteiro mesmo que o resultado seja negativo
        const timeDiff = Math.abs(date.getTime() - todayDate.getTime());

        // diferença de tempo em dias entre as datas
        const diffDays = Math.ceil(timeDiff / dayInMs); 
      
        return toDoCreatedDate[diffDays];
    }

    getTodos(){
        const toDos = this.toDosModel.init()
        console.log('constructor:', toDos);
        return toDos;
    }
}