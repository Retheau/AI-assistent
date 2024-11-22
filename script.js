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

<div id="calendar"></div>
<input type="text" id="taskInput" placeholder="Add a task for this day">
<button onclick="addTaskToDate()">Add Task</button>
<ul id="taskListForDate"></ul>

// Function to generate the calendar
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    let calendarHTML = "<table>";
    calendarHTML += "<thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead>";
    calendarHTML += "<tbody><tr>";

    // Empty cells before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += "<td></td>";
    }

    // Days of the month
    for (let day = 1; day <= lastDate; day++) {
        const currentDate = `${year}-${month + 1}-${day}`;
        calendarHTML += `<td onclick="selectDate('${currentDate}')">${day}</td>`;
        if ((firstDay + day) % 7 === 0) {
            calendarHTML += "</tr><tr>"; // Start a new row at the end of the week
        }
    }

    calendarHTML += "</tr></tbody></table>";
    calendar.innerHTML = calendarHTML;
}

// Function to select a date and show tasks for that date
function selectDate(date) {
    const taskList = document.getElementById('taskListForDate');
    taskList.innerHTML = `Tasks for ${date}:`; // Display selected date
    currentSelectedDate = date; // Store selected date
}

// Function to add a task to the selected date
function addTaskToDate() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById('taskListForDate');
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = ""; // Clear input after adding the task
}

let currentSelectedDate = '';
generateCalendar(); // Call to display the calendar when the page loads

<div>
    <h3>Get Personalized Tips</h3>
    <button onclick="getPersonalizedTip('study')">Study Tips</button>
    <button onclick="getPersonalizedTip('health')">Health Tips</button>
    <button onclick="getPersonalizedTip('productivity')">Productivity Tips</button>
    <div id="tipDisplay"></div>
</div>

// Array of tips categorized
const tips = {
    study: [
        "Use active recall when studying.",
        "Review notes immediately after class.",
        "Try the Pomodoro technique for focus."
    ],
    health: [
        "Drink water regularly.",
        "Exercise for at least 30 minutes a day.",
        "Get 7-9 hours of sleep every night."
    ],
    productivity: [
        "Plan your day the night before.",
        "Avoid multitasking to stay focused.",
        "Take breaks every 25 minutes."
    ]
};

// Function to get a random tip from a category
function getPersonalizedTip(category) {
    const categoryTips = tips[category];
    if (categoryTips) {
        const randomTip = categoryTips[Math.floor(Math.random() * categoryTips.length)];
        document.getElementById('tipDisplay').textContent = randomTip;
    } else {
        document.getElementById('tipDisplay').textContent = "No tips available for this category.";
    }
}
