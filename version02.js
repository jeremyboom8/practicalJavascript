// It should say hi to a someone.

function sayHiTo(person) {
  console.log('Hi', person);
}

var todos = ['item1', 'item2', 'item3'];

// 1 It should have a function to display todos.

function displayTodos() {
  console.log('My todos:', todos);
}

// 2 It should have a function to add todos.

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
};

// 3 It should have a function to change todos.

function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

// 4 It should have a function to change todos.

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
