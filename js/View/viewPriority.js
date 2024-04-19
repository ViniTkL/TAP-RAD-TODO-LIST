class viewPriority{
    constructor(){}

    render(){
        return ` 
        <section id="priority" class="container text-center d-flex  flex-column justify-content-around text-align-center rounded-1">
    
        <div class="title text-white">
            <h3 class="fs-6">Task Priority</h3>    
        </div>
    
        <div class="priority-degree d-flex align-items-center flex-row flex-wrap gap-2 p-2 w-100">
            <button value="1" class="priority background-priority rounded-2">
                <i class="bi bi-flag text-white"></i>
                <p class="text-white">1</p>
            </button>
            <button value="2" class="priority background-priority rounded-2">
                <i class="bi bi-flag text-white"></i>
                <p class="text-white">2</p>
            </button>
            <button value="3" class="priority background-priority rounded-2">
                <i class="bi bi-flag text-white"></i>
                <p class="text-white">3</p>
            </button>
            <button value="4" class="priority background-priority rounded-2" >
                <i class="bi bi-flag text-white"></i>
                <p class=" text-white">4</p>
            </button>
            <button value="5" class="priority background-priority rounded-2">
                <i class="bi bi-flag text-white"></i>
                <p class=" text-white">5</p>
            </button>
            <button value="6" class="priority background-priority rounded-2">
                <i class="bi bi-flag text-white"></i>
                <p class=" text-white">6</p>
            </button>
            <button value="7" class="priority background-priority rounded-2">
                <i class="bi bi-flag text-white"></i>
                <p class=" text-white">7</p>
            </button>
            <button value="8" class="priority background-priority rounded-2">
                <i class="bi bi-flag text-white"></i>
                <p class=" text-white">8</p>
            </button>
            <button value="9" class="priority background-priority rounded-2">
                <i class="bi bi-flag text-white"></i>
                <p class="fw-1 text-white">9</p>
            </button>
            <button value="10" class="priority background-priority rounded-2">
                <i class="bi bi-flag text-white"></i>
                <p class=" text-white">10</p>
            </button>
        </div>

        <div class="btns-priority d-flex justify-content-around align-items-center gap-3">
            <button id="cancel" class="btn btn-primary w-100 h-100 bg-transparent rounded-0 text-white border-0">Cancel</button>
            <button class="btn btn-primary w-100 h-100 rounded-0 text-white rounded-1">Save</button>
        </div>

        <style>

        </style>
</section>
`
    }
}