const { JSDOM } = require('jsdom');
const { showMessage } = require('./ex2');

// Fonction pour simuler un clic sur le bouton
function simulateButtonClick() {
  const event = new Event('click');
  document.getElementById('click-me-button').dispatchEvent(event);
}

// Test pour vérifier si le message change après un clic
function testShowMessage() {
  // Arrange
  const originalMessage = document.getElementById('message').textContent;

  // Act
  simulateButtonClick();

  // Assert
  const updatedMessage = document.getElementById('message').textContent;
  console.assert(
    updatedMessage !== originalMessage,
    "Le message n'a pas changé après le clic"
  );
  console.assert(
    updatedMessage === "Button clicked! The message has changed.",
    "Le message n'a pas été mis à jour correctement"
  );
}

// Exécuter le test
document.addEventListener('DOMContentLoaded', function() {
  testShowMessage();
  console.log("Test terminé");
});