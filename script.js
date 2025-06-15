document.getElementById("submitBtn").addEventListener("click", addTask);
window.addEventListener("DOMContentLoaded", renderTasks);

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const tasks = getTasks();
    tasks.push(taskText);
    saveTasks(tasks);
    taskInput.value = "";
    renderTasks();
}

function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
}

function saveTasks(tasks) {
    localStorage.setItem("taskList", JSON.stringify(tasks));
}

function getTasks() {
    const stored = localStorage.getItem("taskList");
    return stored ? JSON.parse(stored) : [];
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const tasks = getTasks();
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-trash");
        deleteBtn.classList.add("deleteButton");

        deleteBtn.appendChild(icon);
        deleteBtn.addEventListener("click", () => deleteTask(index));

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
