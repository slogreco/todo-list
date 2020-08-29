const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

const todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    let li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}
 //When a form is sumitted...
todoForm.addEventListener("submit", function(event) {
 event.preventDefault();

let todoText = todoInput.value.trim();

// Return from function early is submitted todoText is blank

if (todoText === "") {
    return;
} 

// Add new todoText to todos array, clear the input

todos.push(todoText);
todoInput.value = "";

// Re-render the list

renderTodos();

});