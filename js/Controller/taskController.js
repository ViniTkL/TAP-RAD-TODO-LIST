class taskController{
    constructor(){

        
        this.View = new viewTask();
        
        this.toDosModel = new modelToDo();

        this.categoryModel = new modelCategory(); 
                
        this.formAddTask = document.querySelector("#add-todo");
        
        this.AddTask = document.querySelector("#task");
        
        this.buttonAddTask = '';
                        
        this.showTask()        
    } 
        
    showTask(){
        this.AddTask.innerHTML += this.View.render();

        this.buttonAddTask = document.querySelector("#send-task");

        document.querySelector("#select-priority").addEventListener("click", () => {
            
            document.querySelector("#add-todo").addEventListener("submit", (e) => {
                e.preventDefault();
            });

            new Router().goTo("priority");

            this.getPriorityValue();
     
        });

        document.querySelector("#select-category").addEventListener("click", () => {
            
            document.querySelector("#add-todo").addEventListener("submit", (e) => {
                e.preventDefault();
            });

            new Router().goTo("category");  

            setInterval(() => {this.getCategorieValues(); console.log("INTERVAL");}, 100);
            
            
        });

        this.buttonAddTask.addEventListener("click", () => {

            document.querySelector("#add-todo").addEventListener("submit", (e) => {
                e.preventDefault();
            });

            this.closeTask();

            location.reload();

            new Router().goTo('/')

        }) 
    }

    closeTask(){

            this.createToDo()
                        
            this.AddTask.innerHTML = ""

            new Router().goTo("/");
    }

    getPriorityValue(){
        const priorities = document.querySelectorAll(".priority");

            priorities.forEach(priority => {
                priority.addEventListener("click", () => {
                    this.toDosModel.setPriority(priority.value)
                   })
             });
    }

    getCategorieValues(){
        const categories = document.querySelectorAll(".categoria-btn");
        categories.forEach(categorie => {
            categorie.addEventListener("click", (e) => {
                const button = categorie.querySelector('button')
                const icon = button.querySelector('i')
                this.categoryModel.setName(categorie.id)
                this.categoryModel.setIcon(icon.classList[1]);
                this.categoryModel.setColor(button.classList[2]);
            })
        });
    }

    createToDo(){
            this.toDosModel.setTitle(document.querySelector(".name-task").value);
            this.toDosModel.setDescription(document.querySelector(".description-task").value);
            this.toDosModel.setDate(new Date())
            this.toDosModel.setHour(this.hourFormat(this.toDosModel.getDate()));
            // const priority = this.toDosModel.getPriority() 
            this.toDosModel.setCategorie( {
                name: this.categoryModel.getName(),
                icon: this.categoryModel.getIcon(),
                color: this.categoryModel.getColor(),
            })
            this.toDosModel.setDone(false)

            this.toDosModel.save();
    }
    
    hourFormat(date){
        const minutesWithZero = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
        const hour = date.getHours();
        const minutes = parseInt(date.getMinutes()) < 10 ? minutesWithZero[date.getMinutes()] : date.getMinutes();

        return `${hour}:${minutes}`
    }

}
