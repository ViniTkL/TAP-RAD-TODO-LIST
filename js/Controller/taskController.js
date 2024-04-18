class taskController{
    constructor(){
        this.addTask = document.querySelector("#task");
        this.infoMeio = document.querySelector("#info-meio")
        this.init();
        this.closeTask();
    }

    init(){
            const view = new viewTask();
            this.addTask.innerHTML = view.render();

            const select_priority = document.querySelector("#select-priority")
            select_priority.addEventListener("click", () =>{
            new Router().goTo('priority')
            this.infoMeio.style.display = "none"
            })
    }
    closeTask(){
        const SaveIcon = document.querySelector("#send-task")
        //Tratar e salvar os dados aqui antes de excluir a task 
        SaveIcon.addEventListener("click", () =>{ 

            this.addTask.innerHTML = ""
            
        })
    
    }

}
