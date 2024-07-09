
// Sélectionner les éléments du DOM
const hoverArea = document.getElementById('hover-area');
const interactionResult = document.getElementById('interaction-result');

// Ajouter un écouteur d'événement pour le survol de la zone
hoverArea.addEventListener('mouseover', () => {
  // Mettre à jour le texte lorsque l'utilisateur survole la zone
  interactionResult.textContent = 'You are hovering over the area!';
});

// Ajouter un écouteur d'événement pour la sortie de la zone
hoverArea.addEventListener('mouseout', () => {
  // Réinitialiser le texte lorsque l'utilisateur quitte la zone
  interactionResult.textContent = 'Hover over the area.';
});