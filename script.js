// Simple AI Assistant Script
function greetUser() {
    const name = prompt("What's your name?");
    alert(`Hello, ${name}! I'm your assistant. How can I help you today?`);
}

function showTip() {
    const tips = [
        "Take short breaks while studying.",
        "Drink plenty of water to stay focused.",
        "Organize your tasks for better efficiency.",
        "Review your notes daily to retain knowledge."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    alert(`Here's a tip for you: ${randomTip}`);
}

// Automatically greet the user
greetUser();

// To-Do List Functionality
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById('taskList');

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;
    li.onclick = function () {
        li.style.textDecoration = li.style.textDecoration === "line-through" ? "" : "line-through";
    };

    // Add a delete button to the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear the input after adding
}
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim(); // Get the input value
    if (taskText === "") return; // Prevent adding empty tasks

    const taskList = document.getElementById('taskList');

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Mark as done when clicked
    li.onclick = function () {
        li.style.textDecoration = li.style.textDecoration === "line-through" ? "" : "line-through";
    };

    // Add a delete button to the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(li); // Remove the task from the list
    };

    li.appendChild(deleteBtn); // Add the delete button to the list item
    taskList.appendChild(li);   // Add the list item to the task list

    taskInput.value = ""; // Clear the input after adding the task
}

function setReminder(message, timeInSeconds) {
    setTimeout(() => {
        alert(`Reminder: ${message}`);
    }, timeInSeconds * 1000); // Time in milliseconds
}

// Example usage: Remind in 10 seconds
setReminder("Don't forget to take a break!", 10);

<select id="taskCategory">
    <option value="work">Work</option>
    <option value="study">Study</option>
    <option value="personal">Personal</option>
</select>

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach((li) => {
        tasks.push(li.textContent.replace('Delete', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
            saveTasks();
        };
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Call loadTasks on page load to populate the list
window.onload = loadTasks;

// Add saveTasks() when deleting or adding tasks
