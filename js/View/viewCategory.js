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
}