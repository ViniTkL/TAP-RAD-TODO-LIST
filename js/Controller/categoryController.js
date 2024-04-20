class categoryController{
    constructor(){
        this.categoryScreen = document.querySelector("#categorie-container");
        this.chooseCategoryScreen = document.querySelector("#choose-categorie-container");
        this.init()
        this.toggleOptions();
    }

    init(){
        const view = new viewCategory();
        this.chooseCategoryScreen.innerHTML += view.renderChooseCategory();

        const categories = document.querySelectorAll(".categoria-btn");
        const addCategory = document.querySelector("#btn-add-category");
        const createNewCategory = document.querySelector("#create-new-category");

        categories.forEach(categorie => {
            categorie.addEventListener("click", (e) => {
                const button = document.querySelector('button')
                const icon = button.querySelector('i')
            })
        });

        addCategory.addEventListener("click", () => {

            
            this.closeTab();
        });

        createNewCategory.addEventListener("click", () => {
            this.chooseCategoryScreen.classList.add('vazio')

            this.categoryScreen.innerHTML += view.render();

            const cancelar = document.querySelector("#btn-cancel");
            const salvar = document.querySelector("#btn-create");

            salvar.addEventListener("click", () =>{
                this.chooseCategoryScreen.classList.remove('vazio')     
                this.categoryScreen.innerHTML = '';
            });
    
           cancelar.addEventListener("click", () => {
               this.chooseCategoryScreen.classList.remove('vazio')     
                this.categoryScreen.innerHTML = '';
           });
        })

    }

    toggleOptions(){
        document.querySelector("nav").classList.toggle('vazio');
        document.querySelector("#task").classList.toggle('vazio');
        this.categoryScreen.classList.toggle('categorie-empty');
    }

    closeTab(){
        this.toggleOptions();
        this.chooseCategoryScreen.innerHTML = '';
        history.go(-1);
    }

}