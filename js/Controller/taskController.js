class taskController{
    constructor(){
        this.taskScreen = document.querySelector("#task");
        this.infoMeio = document.querySelector("#info-meio")
        this.init();
        this.closeTask();
    }

    init(){
            const view = new viewTask();
            this.taskScreen.innerHTML = view.render();

            const select_priority = document.querySelector("#select-priority")
            
            select_priority.addEventListener("click", () =>{
                new Router().goTo('priority')
                this.infoMeio.style.display = "none"
            })
            
            const select_category = document.querySelector("#select-category")

            select_category.addEventListener("click", () =>{
                new Router().goTo('category')
            })


    }
    closeTask(){
        const SaveIcon = document.querySelector("#send-task")
        //Tratar e salvar os dados aqui antes de excluir a task 
        SaveIcon.addEventListener("click", () =>{ 

            this.taskScreen.innerHTML = ""
            
        })
    
    }

}
