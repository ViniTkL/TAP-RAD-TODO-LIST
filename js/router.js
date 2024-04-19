class Router {
    constructor(){
      this.rotas = {
        'home': "homeController",
        'task': "viewTask",
        'priority' : "priorityController",
        'category': "categoryController"
      }
    }
      
      goTo(rota) {
        history.pushState({}, '', rota);
        eval(`new ${this.rotas[rota]}()`)
      }
}