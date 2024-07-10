// Fonction pour ajouter une classe à l'élément
export function addClassToElement() {
  const element = document.getElementById('element');
  element.classList.add('new-class');
}

// Fonction pour changer le style du bouton
export function changeButtonStyle(button) {
  button.style.color = 'red';
  button.style.borderColor = 'red';
}

// Ajouter un écouteur d'événement au bouton
if (typeof document !== 'undefined') {
  // Ajouter un écouteur d'événement au bouton, après avoir vérifié que le DOM est bien chargé ('DOMContentLoaded' est important pour tester le comportement complet du code, y compris l'initialisation des écouteurs d'événements.)
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('add-class-button');
    button.addEventListener('click', () => {
      addClassToElement();
      changeButtonStyle(button);
    });
  });
}




