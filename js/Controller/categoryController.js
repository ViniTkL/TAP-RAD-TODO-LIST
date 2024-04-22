class categoryController{
    constructor(){
        this.view = new viewCategory();
        this.categorModel = new modelCategory();
        this.categoryScreen = document.querySelector("#categorie-container");
        this.chooseCategoryScreen = document.querySelector("#choose-categorie-container");
        this.categoriesContainer = document.querySelector('#categorys');
        this.init()
        this.toggleOptions();
    }

    init(){
        this.categoriesContainer.innerHTML += this.view.renderChooseCategory();
        this.chooseCategoryScreen.classList.remove('vazio');

        this.showCategoriesCreatedBefore();
        
        const addCategory = document.querySelector("#btn-add-category");
       
        addCategory.addEventListener("click", () => {
            this.closeTab();
        });
        
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

    async createCategory(){
        const iconSelection = document.querySelector('#select-icon');
        const iconSelected = iconSelection.options[iconSelection.selectedIndex].value
        this.categorModel.setIcon(iconSelected);
        this.categorModel.setName(document.querySelector('#input-name-category').value);

        const newCategorie = this.view.renderNewCategory({name: this.categorModel.getName(),icon:this.categorModel.getIcon(), color: this.categorModel.getColor()})
        
        this.categorModel.save()
        
        this.categoriesContainer.innerHTML += newCategorie; 

        this.addEventToCreateNew();
    }
    
    selectColorCategory(){
        const colors = document.querySelectorAll('.btn-category-colors');

        colors.forEach(color => {
            color.addEventListener('click', () => {
                this.categorModel.setColor(color.classList[2])
            })
        })
    }

    async showCategoriesCreatedBefore(){
        const categoriesList = await this.getCategories();
        if(categoriesList.length){
            categoriesList.forEach(category => {
                console.log();
                this.categoriesContainer.innerHTML += this.view.renderNewCategory(category)
            });
        }
        this.categoriesContainer.innerHTML += this.view.renderButtonCreate();
        this.addEventToCreateNew();
    }

    async getCategories (){
        const list = await this.categorModel.init();
        return list
    }

    addEventToCreateNew(){
        const createNewCategory = document.querySelector("#create-new-category");

        createNewCategory.addEventListener("click", () => {
            this.chooseCategoryScreen.classList.add('vazio')

            this.categoryScreen.innerHTML += this.view.render();

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
    
}