let tasks = [];

function addTask() {
    const taskInput = document.getElementById('inputTask');
    const task = taskInput.value;
    if (task) {
        tasks.push(task);
        taskInput.value = '';
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById('output');
    taskList.innerHTML = tasks.map((task, index) => `
        <li>
            ${task} <button onclick="removeTask(${index})">Remove</button>
        </li>
    `).join('');
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function calculate() {
    addTask();
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputTask" placeholder="Enter a new task" />
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>
`;
