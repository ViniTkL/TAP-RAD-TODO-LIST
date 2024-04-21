class categoryController{
    constructor(){
        this.view = new viewCategory();
        this.categorModel = new modelCategory();
        this.categoryScreen = document.querySelector("#categorie-container");
        this.chooseCategoryScreen = document.querySelector("#choose-categorie-container");
        this.parser = new DOMParser();
        this.init()
        this.toggleOptions();
    }

    init(){
        const view = new viewCategory();
        this.chooseCategoryScreen.innerHTML += view.renderChooseCategory();

        const addCategory = document.querySelector("#btn-add-category");
        const createNewCategory = document.querySelector("#create-new-category");

       

        addCategory.addEventListener("click", () => {
            this.closeTab();
        });

        createNewCategory.addEventListener("click", () => {
            this.chooseCategoryScreen.classList.add('vazio')

            this.categoryScreen.innerHTML += view.render();

            const cancelar = document.querySelector("#btn-cancel");
            const salvar = document.querySelector("#btn-create");

            this.selectColorCategory();

            salvar.addEventListener("click", () =>{
                this.createCategory();
                this.closeNewCategoryTab();
            });
    
           cancelar.addEventListener("click", () => {
            this.closeNewCategoryTab();
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

    closeNewCategoryTab(){
        this.chooseCategoryScreen.classList.remove('vazio')     
        this.categoryScreen.innerHTML = '';
    }

    createCategory(){
        let categoriesContainer = document.querySelector('#categorys');
        this.categorModel.setIcon('bi-basket');
        this.categorModel.setName(document.querySelector('#input-name-category').value);
        const newCategory = this.view.renderNewCategory({name: this.categorModel.getName(),icon:this.categorModel.getIcon(), color: this.categorModel.getColor()})
        
        categoriesContainer.innerHTML += newCategory;

        this.categorModel.save()
        console.log(this.categorModel.getName());
        console.log('cor',this.categorModel.getColor());
    }
    
    selectColorCategory(){
        const colors = document.querySelectorAll('.btn-category-colors');

        colors.forEach(color => {
            color.addEventListener('click', () => {
                this.categorModel.setColor(color.classList[2])
            })
        })
    }
}