class Router {
    constructor(){
      this.rotas = {
        'task': "taskController",
        'priority' : "priorityController"
      }
    }
      
      goTo(rota) {
        history.pushState({}, '', rota);
        eval(`new ${this.rotas[rota]}()`)
      }
}