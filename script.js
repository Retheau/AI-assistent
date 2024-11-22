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
