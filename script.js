let pendingTasks = document.getElementById('pendingTasks');
let completedTasks = document.getElementById('completedTasks');
let taskInput = document.getElementById('taskInput');

let tasks = [];

function addTask() {
    let task = taskInput.value.trim();
    if (task!== '') {
        tasks.push({ text: task, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    pendingTasks.innerHTML = '';
    completedTasks.innerHTML = '';
    tasks.forEach((task) => {
        let taskElement = document.createElement('li');
        taskElement.textContent = task.text;
        if (task.completed) {
            completedTasks.appendChild(taskElement);
        } else {
            pendingTasks.appendChild(taskElement);
        }
        taskElement.addEventListener('click', () => {
            task.completed =!task.completed;
            renderTasks();
        });
        taskElement.addEventListener('dblclick', () => {
            let index = tasks.indexOf(task);
            tasks.splice(index, 1);
            renderTasks();
        });
    });
}

renderTasks();