import { TodoComponent } from "./todoComponent.js";

class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.todoList = document.getElementById("todo-list");
    this.todoForm = document.getElementById("todo-form");
    this.todoInput = document.getElementById("todo-input");

    this.todoForm.addEventListener("submit", this.addTodo.bind(this));
    this.renderTodos();
  }

  addTodo(e) {
    e.preventDefault();
    const todoText = this.todoInput.value.trim();
    if (todoText) {
      this.todos.push({ id: Date.now(), text: todoText, completed: false });
      this.saveTodos();
      this.renderTodos();
      this.todoInput.value = "";
    }
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.saveTodos();
    this.renderTodos();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodos();
    this.renderTodos();
  }

  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  renderTodos() {
    this.todoList.innerHTML = "";
    this.todos.forEach((todo) => {
      const todoComponent = new TodoComponent(
        todo,
        this.toggleTodo.bind(this),
        this.deleteTodo.bind(this)
      );
      this.todoList.appendChild(todoComponent);
    });
  }
}

new TodoApp();

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then((registration) => console.log("Service Worker registered"))
    .catch((error) =>
      console.log("Service Worker registration failed:", error)
    );
}
