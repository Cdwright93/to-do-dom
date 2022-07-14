let todo = [];
let form = document.querySelector("todo-submission");
let todoList = document.getElementById("todo-list");
document
  .getElementById("todo-submission")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let todoItem = document.getElementById("todo-item").value;
    todo.push(todoItem);
    todoListItem = document.createElement("li");
    todoListItem.innerHTML = todoItem;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    todoListItem.appendChild(checkbox);
    checkbox.addEventListener("click", function (event) {
      if (checkbox.checked) {
        todoListItem.style.textDecoration = "line-through";
      } else {
        todoListItem.style.textDecoration = "none";
      }
    });
    todoList.appendChild(todoListItem);
  });
