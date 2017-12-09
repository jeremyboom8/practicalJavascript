var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My todos:');
    for (var i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].todoText);
    };
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};











// Before the exercise started - playing with for loops
// Plain English

// i = 0                    // Initialization
// Say "hey" if i < 3       // Condition
// Increase i by 1          // Final-expression

// Output

// 0 "hey"
// 1 "hey"
// 2 "hey"
// 3

// Explained

// for (initialization; condition; final-expression) {
// for (var i = 0; i < 3;  i++) {
//   console.log("hey");
// }

// Shortcut for looping over and adding 1

// i = i + 1    <= long way
// i++          <= shorcut

// i = i + 5    <= no short way to write this

// Looping over an array

// var testArray = ['item 1', 'item 2', 'item 3']

// for (var i = 0; i < testArray.length;  i++) {
//   console.log(testArray[i]);
// }

