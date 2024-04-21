class viewCategory {
    constructor(){

    }

    render(){
        return `
        <section id="category" class="w-100 h-100 container d-flex flex-column">
            <div class="title-category navbar text-white fw-bold fs-5 pt-4">
                <p>Create new category</p>
            </div>
            <div id="category-name" class="">
                <label class="fs-6 text-white fw-normal pb-3" for="input-name-category">Category name:</label>
                <input id="input-name-category" class=" text-white w-100 rounded-1 form-control fw-normal" type="text" placeholder="Category name">
            </div>

            <div id="category-icon" class="mt-3">
                <label class="fs-6 text-white fw-normal pb-3" for="btn-category">Category icon:</label>
                <br>
                <button id="btn-category-icons" type="button" class="btn btn-secondary text-white border-0 fw-normal" style="font-size: 12px;">Choose icon from library</button>
            </div>

            <div id="category-colors" class="mt-3">
                <label class="fs-6 text-white fw-normal pb-3" for="">Category color:</label>
                <div class="colors d-flex gap-2">
                    <button class="btn-category-colors rounded-circle color-yellow "></button>
                    <button class="btn-category-colors rounded-circle color-green "></button>
                    <button class="btn-category-colors rounded-circle color-grennblue "></button>
                    <button class="btn-category-colors rounded-circle color-darkblue "></button>
                    <button class="btn-category-colors rounded-circle color-lightblue "></button>
                    <button class="btn-category-colors rounded-circle color-orange "></button>
                    <button class="btn-category-colors rounded-circle color-purple "></button>
                    <button class="btn-category-colors rounded-circle color-pink "></button>
                    <button class="btn-category-colors rounded-circle color-red "></button>
                </div>
            </div>
            <div class="btn-create-cancel container w-100 d-flex justify-content-center gap-2 position-absolute bottom-0 pr-5">
                
                    <button id="btn-cancel" class="btn btn-secondary  bg-transparent fw-normal fs-6 border-0" style="color: rgba(134, 135, 231, 1)">Cancel</button>

                    <button id="btn-create" class="btn btn-secondary  text-white fw-normal fs-6 border-0" style="background-color: rgba(134, 135, 231, 1);">Create Category</button>
            </div>
    </section>
        `
    }

    renderChooseCategory(){
        return`
                <div id="grocery" class="categoria categoria-btn d-flex flex-column text-center ">
                    <button class="border-0 rounded-1 grocery-color"><i class="bi bi-basket fs-1"></i></button>
                    <p>Grocery</p>
                </div>

                <div id="work" class="categoria categoria-btn d-flex flex-column text-center">
                    <button class="border-0 rounded-1 work-color"><i class="bi bi-briefcase fs-1"></i></button>
                    <p>Work</p> 
                </div>
                
                
                <div id="sport" class="categoria categoria-btn d-flex flex-column text-center">
                    <button class="border-0 rounded-1 sport-color"><i class="bi bi-bicycle fs-1"></i></button>
                    <p class="">Sport</p>
                </div>
                
                <div id="design" class="categoria categoria-btn d-flex flex-column text-center">
                    <button class="border-0 rounded-1 design-color"><i class="bi bi-vector-pen fs-1"></i></button>
                    <p>Design</p>
                </div>
                
                <div id="university" class="categoria categoria-btn d-flex flex-column text-center">
                    <button class="border-0 rounded-1 university-color"><i class="bi bi-book fs-1"></i></button>
                    <p>University</p>
                </div>
                
                <div id="social" class="categoria categoria-btn d-flex flex-column text-center">
                    <button class="border-0 rounded-1 social-color"><i class="bi bi-megaphone fs-1"></i></button>
                    <p>Social</p>
                </div>
                
                <div id="music" class="categoria categoria-btn d-flex flex-column text-center">
                    <button class="border-0 rounded-1 music-color"><i class="bi bi-music-note-beamed fs-1"></i></button>
                    <p>Music</p>
                </div>
                
                <div id="health" class="categoria categoria-btn d-flex flex-column text-center">
                    <button class="border-0 rounded-1 health-color"><i class="bi bi-heart-pulse fs-1"></i></button>
                    <p>Health</p>
                </div>
                
                <div id="movie" class="categoria categoria-btn d-flex flex-column text-center">
                    <button class="border-0 rounded-1 movie-color"><i class="bi bi-camera-video fs-1"></i></button>
                    <p>Movie</p>
                </div>
                
                <div id="home" class="categoria categoria-btn d-flex flex-column text-center">
                    <button class="border-0 rounded-1 home-color"><i class="bi bi-house fs-1"></i></button>
                    <p>Home</p>
                </div>
                
                
            `
    }

    renderNewCategory({name, icon, color}){
        return`
        <div id="${name}" class="categoria categoria-btn d-flex flex-column text-center">
            <button class="border-0 rounded-1 ${color}"><i class="bi ${icon} fs-1"></i></button>
            <p>${name}</p>
        </div>
        `
    }

    renderButtonCreate(){
        return`
        <div id="create-new-category" class="categoria d-flex flex-column text-center pb-2">
            <button class="border-0 rounded-1" style="background: rgba(128, 255, 209, 1);"><i class="bi bi-plus-lg fs-1" style="color:rgba(0, 163, 105, 1);"></i></button>
            <p class="">Create New</p>
        </div>
        `
    }
}