class categoryController{
    constructor(){
        this.categoryScreen = document.querySelector("#task")
        this.init()
    }

    init(){
        const view = new viewCategory();
        this.categoryScreen.innerHTML = view.render();
    }
}