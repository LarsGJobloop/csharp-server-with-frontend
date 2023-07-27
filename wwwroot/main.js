import { getAllTodoes } from "./api.js";

const logTodoButton = document.getElementById("log-todo")

logTodoButton.addEventListener("click", () => {
  const todoes = getAllTodoes()
  todoes.forEach(todo => createTodoCard(todo))
})

const todoListRoot = document.getElementById("todoes")
function createTodoCard(todo) {
  // First create an element
  const newTodo = document.createElement("li")
  // Modify element
  newTodo.className = "todo-card"

  const heading = document.createElement("h2")
  heading.textContent = todo.name
  newTodo.appendChild(heading)
  
  // Finaly append to document
  todoListRoot.appendChild(newTodo)
}