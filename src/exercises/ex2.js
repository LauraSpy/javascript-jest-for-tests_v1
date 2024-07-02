const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

// function showMessage() {
//   // Your code here: Change the text content of the 'message' paragraph.

// }

function showMessage() {
  // Get the paragraph element by its ID
  const messageParagraph = document.getElementById('message');
  
  // Change the text content of the paragraph
  messageParagraph.textContent = "Button clicked! The message has changed.";
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('click-me-button');
  button.addEventListener('click', showMessage);
});

clickMeButton.addEventListener('click', showMessage);

module.exports = showMessage;