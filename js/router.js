class Router {
    constructor(){
      this.rotas = {
        '/': "homeController",
        'task': "taskController",
        'priority' : "priorityController",
        'category': "categoryController",
      }
    }
      
      goTo(rota) {
        history.pushState({}, '', rota);
        eval(`new ${this.rotas[rota]}()`)
      }
}