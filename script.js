// Simple AI Assistant Script
function greetUser() {
    const name = prompt("What's your name?");
    alert(`Hello, ${name}! I'm your assistant. What can I help you with today?`);
}

function showTip() {
    const tips = [
        "Take short breaks while studying.",
        "Stay hydrated!",
        "Organize your tasks for better focus.",
        "Review notes daily to retain information."
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
