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

