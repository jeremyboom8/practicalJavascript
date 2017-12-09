var todoList = {
  todos: [{
      todoText: "Item 1",
      completed: false
    },{
      todoText: "Item 2",
      completed: false
    },{
      todoText: "Item 3",
      completed: true
    }],
  displayTodos: function() {
    // if this.todos.length === 0 (=== = 'is equal to': compares values in JS)
    if (this.todos.length === 0) {
      console.log('Your todo list is empty.');
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x) ', this.todos[i].todoText);
        } else {
          console.log('( ) ', this.todos[i].todoText);
        }
      }
    }
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

