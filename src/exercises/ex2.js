// ex2.js
let clickMeButton;
let message;

// Cette fonction sera appelée dans l'environnement du navigateur
function initializeDOM() {
  clickMeButton = document.getElementById('click-me-button');
  message = document.getElementById('message');
  clickMeButton.addEventListener('click', showMessage);
}

function showMessage() {
  if (message) {
    message.textContent = "Le bouton a été cliqué ! Le message a changé.";
  }
  return "Le bouton a été cliqué ! Le message a changé.";
}

// Exécuter initializeDOM seulement si nous sommes dans un navigateur
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initializeDOM);
}

module.exports = { showMessage, initializeDOM };
