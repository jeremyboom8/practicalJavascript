// Javascript Objects
var myComputer = {
  operatingSystem: 'mac',
  screenSize: '13 inches',
  purchaseYear: 2016,
}

var jeremy = {
  name: 'Jeremy',
  sayName: function() {
    console.log(this.name);
  }
}

var todoList = {
  todos: ['item1', 'item2', 'item3'],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  }
}
