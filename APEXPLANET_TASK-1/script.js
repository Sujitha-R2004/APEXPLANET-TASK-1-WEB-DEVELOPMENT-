//
// This file contains your JavaScript code, which adds dynamic behavior.
// It's linked to your 'index.html' via: <script src="script.js"></script>
// Make sure this file is named 'script.js' and is in the same folder as 'index.html'.
//

// Get a reference to the button element with the ID 'magicButton'.
// This allows JavaScript to find and interact with that specific button on the page.
const magicButton = document.getElementById('magicButton');

// Add an event listener to the button.
// This tells the browser: "When a 'click' event occurs on 'magicButton',
// execute the anonymous function defined below."
magicButton.addEventListener('click', function() {
    // An array of different engaging messages for the alert box.
    // We'll pick one randomly each time the button is clicked to add variety.
    const messages = [
        "✨ Wow! You've activated the ancient magic! ✨",
        "🪄 The digital spirits have been summoned! 🧙‍♂️",
        "🌟 Your journey into interactivity has begun! 🚀",
        "🎉 Behold! A message from the realm of JavaScript! 💻",
        "🧚‍♀️ The pixels dance to your command! 🦋",
        "💡 A brilliant idea just sparked! Keep coding! 🧠"
    ];

    // Select a random message from the 'messages' array.
    // Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive).
    // Multiplying by messages.length scales it to the array's size.
    // Math.floor() rounds down to the nearest whole number, giving a valid array index.
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Display the randomly selected message in a standard browser alert box.
    alert(randomMessage);

    // Optional: Change the button's text after the very first click.
    // This provides visual feedback that the button's behavior has changed slightly.
    if (magicButton.textContent === "Unleash the Magic!") {
        magicButton.textContent = "Unleash More Magic!";
    }
});