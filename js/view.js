
class view { constructor(){}

    render(){

        return `
        
            <section class="conteinerTask">

            <div class="corpoTask">

                <p id="Add-Task-Name">Add Task</p>
    
                <input class="name-task" type="text" placeholder="Title" spellcheck="false">

                <input class="description-task" type="text" placeholder="Description" spellcheck="false">

                <div class="icons">

                    <a href="checklist.jpg" class="link-timer">
                    <i class="gg-timer"></i>
                    </a>

                    <a href="checklist.jpg" class="link-tag">
                    <i class="gg-pentagon-down"></i>
                    </a>

                    <a href= "checklist.jpg" class="link-flag">
                    <i class="gg-flag-alt"></i>
                    </a>

                </div>

                <button class="save-icon">

                    <a class="link-send">

                        <i class="gg-chevron-right-r"></i>

                    </a>

                </button>
                
            </div>

        </section>
          
        `

    }

}
