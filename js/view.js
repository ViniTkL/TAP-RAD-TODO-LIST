
class view { constructor(){}

    render(){

        return `
        
            <section class="container-task color-navigation d-flex justify-content-center align-items-center">

                <div class="corpoTask position-fixed color-navigation w-100 container d-flex flex-column rounded-2">

                    <p id="Add-Task-Name" class="text-white text-start fw-bold my-3  mx-3 ">Add Task</p>
        
                    <input class="name-task color-navigation h-1 rounded-1 fw-2 px-3 py-2 mx-3 mb-2 text-white fw-normal" type="text" placeholder="Title" spellcheck="false">

                    <input class="description-task color-navigation h-1 rounded-1 fw-2 px-3 py-2 mx-3 mt-0 mb-3 text-white fw-normal" type="text" placeholder="Description" spellcheck="false">

                    <div class="icons  d-flex flex-row justify-content-between position-relative w-50">

                        <a href="checklist.jpg" class="link-timer text-decoration-none">
                        <i class="bi bi-stopwatch text-white mx-2 my-2"></i>
                        </a>

                        <a href="checklist.jpg" class="link-tag text-decoration-none">
                        <i class="bi bi-tag text-white"></i>
                        </a>

                        <a href= "checklist.jpg" class="link-flag text-decoration-none">
                        <i class="bi bi-flag text-white"></i>
                        </a>

                    </div>

                    <button class="save-icon color-navigation position-absolute d-flex align-items-center border-0">
                        <a class="link-send">
                            <i class="bi bi-send text-blue"></i>
                        </a>

                    </button>
    
                </div>

                <style>
                    .icon, #icon-header, .p-subtitle, .p-subtitle-nav {
                        opacity: 40%;
                    }
                        
                    #icon-plus{
                        opacity: 80%
                    }

                    #img-profile{
                        opacity: 60%;
                    }

                    .info-meio{
                        display: none;
                    }

                </style>

        </section>
          
        `

    }

    renderTasks(){
        
    }
}