class taskController{
    constructor(){
        this.addTask = document.querySelector("#task");
        this.init();
        this.closeTask();
    }

    init(){
            const view = new viewTask();
            this.addTask.innerHTML = view.render();
    }
    closeTask(){
        const SaveIcon = document.querySelector("#send-task")
        //Tratar e salvar os dados aqui antes de excluir a task 
        SaveIcon.addEventListener("click", () =>{ 
                            
            this.addTask.innerHTML = ""
            
        })
    
    }

}
