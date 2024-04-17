class controller { 
    constructor(){

    this.ButtonAddTask = document.querySelector("#icon-plus")
    this.View = new view()
    this.AddTask = document.querySelector(".buttonAdd")
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
                        
        this.AddTask.innerHTML = ""
        
    })

}

}