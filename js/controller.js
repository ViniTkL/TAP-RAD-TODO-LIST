class controller { constructor(){


    this.ButtonAddTask = document.querySelector(".btn")

    this.View = new view()

    this.AddTask = document.querySelector(".ButtonAdd")

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

        
        alert(`titulo: ${title} description: ${description}`)               
        
        this.AddTask.innerHTML = ""
        
    })

}

}