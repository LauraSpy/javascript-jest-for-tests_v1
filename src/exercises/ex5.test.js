
// Aucune importation n'est nécessaire car nous allons charger le script directement

describe('Hover Area Interaction', () => {
    // Configuration avant chaque test
    beforeEach(() => {
      // Créer une structure DOM simulée pour les tests
      document.body.innerHTML = `
        <div id="hover-area" style="width: 200px; height: 200px; background-color: lightblue;"></div>
        <p id="interaction-result">Hover over the area.</p>
      `;
      
      // Charger le script ex5.js après avoir configuré le DOM
      // Cela permet aux écouteurs d'événements de s'attacher aux bons éléments
      require('./ex5');
    });
  
    // Test pour vérifier le comportement au survol
    test('updates text content on hover', () => {
      // Sélectionner les éléments du DOM
      const hoverArea = document.getElementById('hover-area');
      const interactionResult = document.getElementById('interaction-result');
  
      // Simuler un événement de survol (mouseover)
      hoverArea.dispatchEvent(new MouseEvent('mouseover'));
  
      // Vérifier si le texte a été mis à jour correctement
      expect(interactionResult.textContent).toBe('You are hovering over the area!');
    });
  
    // Test pour vérifier le comportement à la sortie du survol
    test('resets text content on mouseout', () => {
      // Sélectionner les éléments du DOM
      const hoverArea = document.getElementById('hover-area');
      const interactionResult = document.getElementById('interaction-result');
  
      // Simuler un événement de survol suivi d'une sortie
      hoverArea.dispatchEvent(new MouseEvent('mouseover'));
      hoverArea.dispatchEvent(new MouseEvent('mouseout'));
  
      // Vérifier si le texte a été réinitialisé correctement
      expect(interactionResult.textContent).toBe('Hover over the area.');
    });
  });



  /* 
  
Dans ex5.js, nous utilisons addEventListener pour réagir aux événements de survol (mouseover) et de sortie (mouseout).

Dans ex5.test.js:
    - Nous utilisons describe pour grouper les tests liés à cette fonctionnalité.
    - beforeEach est utilisé pour réinitialiser l'environnement de test avant chaque test individuel.
    - Nous créons un DOM simulé avec document.body.innerHTML pour avoir les éléments nécessaires.
    - require('./ex5') charge le script à tester après la création du DOM simulé.
    - Nous utilisons dispatchEvent pour simuler les événements de souris.
    - expect().toBe() est utilisé pour vérifier si le résultat obtenu correspond à ce que nous attendons.

Ces tests vérifient que le texte change correctement lorsque l'utilisateur survole la zone et qu'il revient à son état initial lorsque l'utilisateur quitte la zone.

*/