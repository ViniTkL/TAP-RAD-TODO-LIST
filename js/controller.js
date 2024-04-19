class controller { 
    
    constructor(){
        
        this.View = new view()
        
        this.toDosModel = new model();
        
        this.homeEmpty = document.querySelector('#info-meio')
        
        this.homeWithTodos = document.querySelector('#tasks-criadas')
        
        this.ButtonAddTask = document.querySelector(".btn")
        
        this.AddTask = document.querySelector(".ButtonAdd")
        
        this.toDoList = document.querySelector(".toDo-list")
        
        this.toDoDoneList = document.querySelector(".toDo-list-done")
        
        this.showTask()
        
        this.showTodosCreatedBefore();
        
        this.drag()
        
    } 
    
    async showTodosCreatedBefore(){
        const todosCreated = await this.getTodos();    
        console.log('todosCreated', todosCreated);   
        
        if(todosCreated.length){
            console.log('não aplica vazio');
            todosCreated.forEach(toDo => {
                const {title, description, priority, categorie, done, date, hour, _id} = toDo;
                const dayCreated = this.formatToDoDate(date);
                
                this.toggleHomes();
                
                this.createToDoListDay({title, description, priority, categorie, done, dayCreated, hour, _id});                
            });
            
        }else{
            this.homeWithTodos.classList.add('vazio');
        }
        
    }

    async getTodos(){
        const toDos = await this.toDosModel.init()

        return toDos;
    }

    
    showTask(){
        this.ButtonAddTask.addEventListener("click", () =>{

            this.AddTask.innerHTML += this.View.render()

                this.closeTask()

        })    
    }

    closeTask(){

        const buttonCreateToDo = document.querySelector(".save-icon")
        //Tratar e salvar os dados aqui antes de excluir a task 
        
         buttonCreateToDo.addEventListener("click", () =>{ 
            
            const toDo = this.createToDo()
            
            this.createToDoListDay(toDo)
                        
            this.toggleHomes()
            
            this.AddTask.innerHTML = ""
            
        })

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
    
    createToDoListDay(toDoCreated){
        const {title, description, priority, categorie, done, dayCreated, hour} = toDoCreated
        const toDoLists = document.querySelectorAll('.toDo-list')
        let alreadyExists = false
        
        toDoLists.forEach(toDo => {
            toDo.classList.contains(`${dayCreated}`) ? alreadyExists = true: ' ';
        });

        alreadyExists ? this.whereToRender(toDoCreated) :  this.createOrNotList(toDoCreated)
    }

    createOrNotList(toDo){
        toDo.done ? this.whereToRender(toDo) : this.toDoList.innerHTML += this.View.renderToDoList(toDo.dayCreated) + this.View.renderToDO(toDo)
    }
    
    whereToRender({title, description, priority, categorie, done, dayCreated, hour, _id}){
        done ? 
        this.toDoDoneList.innerHTML += this.View.renderToDO({title, description, priority, categorie, done, dayCreated, hour, _id})
        :  this.insertElement(document.querySelector(`.toDo-list .${dayCreated}`), {title, description, priority, categorie, done, dayCreated, hour, _id})   
    }

    insertElement(fatherElement, toDo){
        fatherElement.innerHTML += this.View.renderToDO(toDo)
    }

    toggleHomes(){
        this.homeWithTodos.classList.contains('vazio') ? this.homeWithTodos.classList.remove('vazio')  : ""
        this.homeWithTodos.classList.contains('vazio') ? "" : this.homeEmpty.classList.add('vazio') 
    }

    hourFormat(date){
        const minutesWithZero = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
        const hour = date.getHours();
        const minutes = parseInt(date.getMinutes()) < 10 ? minutesWithZero[date.getMinutes()] : date.getMinutes();

        return `${hour}:${minutes}`
    }

    formatToDoDate(date){
        const toDoCreatedDay = ['Hoje', 'Hoje', 'Ontem', 'Dias-3', 'Dias-4', 'Dias-5'];
        const dayInMs = 1000 * 3600 * 24;
        const todayDate = new Date();
        const createdDate = new Date(date)

        // deiferena de tempo em millisegundos entre as datas, o abs e para o valor ser absoluto, ou seja, sempre retorna inteiro mesmo que o resultado seja negativo
        const timeDiff = Math.abs(createdDate.getTime() - todayDate.getTime());
        
        // diferença de tempo em dias entre as datas
        const diffDays = Math.ceil(timeDiff / dayInMs); 
        
        return toDoCreatedDay[diffDays];
    }
    

 
    drag(){
        const toDosUndone = document.querySelectorAll(".toDo-list");
        const toDosDone = document.querySelectorAll(".toDo-list-done")

        document.addEventListener("dragstart", (e) => {
        e.target.classList.add("dragging");
        });

        document.addEventListener("dragend", (e) => {
        e.target.classList.remove("dragging");
        });

        toDosUndone.forEach( item => {
        item.addEventListener("dragover", (e) => {
            const dragging = document.querySelector(".dragging");
            const applyAfter = this.getNewPosition(item, e.clientY);

            if (applyAfter) {
            applyAfter.insertAdjacentElement("beforeend", dragging);
            } else {
            item.append(dragging);
            console.log('hwfhseifh');
            }            
        });
        });

        toDosDone.forEach( item => {
            item.addEventListener("dragover", (e) => {
                const dragging = document.querySelector(".dragging");
                const applyAfter = this.getNewPosition(item, e.clientY);
    
                if (applyAfter) {
                applyAfter.insertAdjacentElement("beforeend", dragging);
                } else {
                item.append(dragging);
            }
        });
        
        item.addEventListener("dragend",() => {
            const dragging = document.querySelector(".dragging");

            this.toDosModel.update(dragging.id);
            })
        });
    }

     getNewPosition(column, posY) {
        const cards = column.querySelectorAll(".item:not(.dragging)");
        let result;

        for (let refer_card of cards) {
            const box = refer_card.getBoundingClientRect();
            const boxCenterY = box.y + box.height / 2;

            if (posY >= boxCenterY) result = refer_card;
        }

        return result;
        }
        



}