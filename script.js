const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

const todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
    todoList.textContent = ("");
    todoCountSpan.textContent = todos.length;
}

for (i = 0; i < todos.length; i++) {
    let todo = todos[i];

    let li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
}