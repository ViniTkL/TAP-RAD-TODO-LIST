class priorityController{
    constructor(){
        this.priorityScreen = document.querySelector("#task");
        this.init();
    }

    init(){
        const view = new viewPriority();
        this.priorityScreen.innerHTML = view.render();

       const cancelar = document.querySelector("#cancel");

       cancelar.addEventListener("click", () =>{
        new Router().goTo("task")
       })

    }
 

}
