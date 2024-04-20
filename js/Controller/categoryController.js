class categoryController{
    constructor(){
        this.categoryScreen = document.querySelector("#categorie-container")
        this.init()
    }

    init(){
        const view = new viewCategory();
        this.categoryScreen.innerHTML += view.render();
    }
}