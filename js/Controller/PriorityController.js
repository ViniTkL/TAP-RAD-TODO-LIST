class priorityController{
    constructor(){
        this.priorityValue = 0;
        this.priorityScreen = document.querySelector("#priority-container");
        this.homeEmpty = document.querySelector("#info-meio").classList.add("vazio");
        this.homeWithTodos = document.querySelector("#tasks-criadas").classList.add("vazio");
        this.toggleOptions()
        this.init();
    }

    init(){
        const view = new viewPriority();
        this.priorityScreen.innerHTML += view.render();
        
        const priorities = document.querySelectorAll(".priority");
        const cancelar = document.querySelector("#cancel");
        const salvar = document.querySelector("#save-pri");

         
        priorities.forEach(priority => {
           priority.addEventListener("click", () => {
                   this.valorPri(priority.value)
              })
        });

    
       salvar.addEventListener("click", () =>{
            this.closeTab();        
            return this.priorityValue
        })

       cancelar.addEventListener("click", () => {
            this.closeTab();
       })

       return 0;

    }

    closeTab(){
        this.toggleOptions();
        this.priorityScreen.innerHTML = '';
        history.go(-1);
    }

    toggleOptions(){
        document.querySelector("nav").classList.toggle('vazio')
    }
    
    valorPri(valor){
        this.priorityValue = valor
    }
}
