
// Fonction pour ajouter une classe à l'élément
function addClassToElement() {
  const element = document.getElementById('element');
  element.classList.add('new-class');
}

// Ajouter un écouteur d'événement au bouton
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('add-class-button');
  button.addEventListener('click', addClassToElement);
});

// Exporter la fonction pour les tests
export { addClassToElement };