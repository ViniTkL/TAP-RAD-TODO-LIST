class taskController{
    constructor(){
        this.priorityScreen = document.querySelector("#priority");
        this.init();
    }

    init(){
            const view = new viewTask();
            this.priorityScreen.innerHTML = view.render();
    }
 

}
