// --- To-Do List Functionality ---

// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
        saveTasks();  // Save tasks after delete
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = ""; // Clear input after adding the task

    saveTasks();  // Save tasks after adding
}

// Function to save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach((li) => {
        tasks.push(li.textContent.replace('Delete', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete';
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
            saveTasks();  // Save tasks after delete
        };
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Call loadTasks on page load to populate the list
window.onload = loadTasks;


// --- Personalized Tips Functionality ---

// Array of tips categorized by topics
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

// Function to get a random tip from a selected category
function getPersonalizedTip(category) {
    const categoryTips = tips[category];
    if (categoryTips) {
        const randomTip = categoryTips[Math.floor(Math.random() * categoryTips.length)];
        document.getElementById('tipDisplay').textContent = randomTip;
    } else {
        document.getElementById('tipDisplay').textContent = "No tips available for this category.";
    }
}


// --- Calendar Functionality ---

// Function to generate a simple calendar
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

