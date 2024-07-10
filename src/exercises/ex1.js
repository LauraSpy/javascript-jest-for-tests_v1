
// Fonction pour ajouter une classe à l'élément
function addClassToElement() {
  const element = document.getElementById('element');
  element.classList.add('new-class');
}

// Ajouter un écouteur d'événement au bouton, après avoir vérifié que le DOM est bien chargé ('DOMContentLoaded' est important pour tester le comportement complet du code, y compris l'initialisation des écouteurs d'événements.)
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('add-class-button');
  button.addEventListener('click', addClassToElement);
});
