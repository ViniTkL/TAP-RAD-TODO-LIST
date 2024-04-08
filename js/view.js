
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

            <style>
                #text, #casinha, #descricao{
                    opacity: 40%;
                }
                     
                .vetor1, .vetor2, .vetor3, .little-options, .profile, .icon-casa, 
                .icon-calendar, .gg-math-plus, .icon-focuse, .icon-profile{
                    opacity: 40%;
                }

                .icon-new{
                    opacity: 90%;
                }

                #imagem-meio{
                    display: none;
                }

                #first-text{
                    display: none;
                }

                #second-text{
                    display: none;
                }
                
            </style>

        </section>
          
        `

    }

}