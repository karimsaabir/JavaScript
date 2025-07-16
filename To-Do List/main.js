const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#textform");
const todoList = document.querySelector("#todo-list");

document.addEventListener("DOMContentLoaded", loadTasks);
function loadTasks() {
  const tasks = gettasks();

  tasks.forEach(task => {
   organic(task);
  });
  
  
}

todoform.addEventListener("submit", addlist);

function addlist(e) {
  e.preventDefault();

  const sabir = todoInput.value.trim();

  if (sabir !== "") {
    const task = {
      id: Date.now(),
      text: sabir,
      completed: false,
    };

    organic(task);
    saveTask(task)
    todoInput.value = "";
    todoInput.focus();

  }
}

function organic(task) {
  const li = document.createElement("li");
  li.className = `list ${task.completed ? "completed" : ""}`;
  li.dataset.id = task.id;
  li.innerHTML = `<input type="checkbox" class="complete-checkbox">
                  <span class="task">${task.text}</span>
                  <button class="edit-btn">Edit</button>
                  <button class="delete-btn">Delete</button>`;

  todoList.appendChild(li);
  attachEventListerner(li,task)
}

function attachEventListerner(li, task) {
    const deletebtn = li.querySelector(".delete-btn")
    const editbtn= li.querySelector(".edit-btn")
  
    deletebtn.addEventListener("click", function () {
    handleDelete(task.id, li)
    })

    editbtn.addEventListener("click", function () {
      handleEdit(task.id, li)
    })
}

function handleDelete(id, li) {
  let tasks = gettasks();
  tasks=tasks.filter(task=> task.id !=id);
  localStorage.setItem("tasks", JSON.stringify(tasks))
  li.remove();
}
function handleEdit(taskId, li) {
  const uusey = li.querySelector(".task")

  const newTask = prompt("Edit your task:",uusey.textContent)
  if (newTask !== null && newTask.trim() !=="") {
    // update task
    updaTask(taskId, newTask)
    // update dom
    uusey.textContent = newTask;
    
  }

}
function updaTask(id, newTask) {
  const tasks =gettasks();
  const task = tasks.filter(task => task == id)
  if (task) {
    task.text = newTask;
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}


function saveTask(task) {
  const oldTask= gettasks();
  oldTask.push(task)
    localStorage.setItem("tasks", JSON.stringify(oldTask))
    
}

function gettasks() {
  const oldTask= JSON.parse(localStorage.getItem("tasks")) || [];
  return oldTask;
}

