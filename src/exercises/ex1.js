// script.js
const addButton = document.getElementById('add-class-button');
const element = document.getElementById('element');

function addClassToElement() {
  // Ajoute la classe Bootstrap 'bg-danger' pour un fond rouge
  element.classList.add('bg-danger');
}

addButton.addEventListener('click', addClassToElement);

module.exports = addClassToElement;

