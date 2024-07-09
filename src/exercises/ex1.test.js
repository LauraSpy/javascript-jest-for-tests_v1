
// Ex1.test.js

import { addClassToElement } from './ex1';

describe('addClassToElement function', () => {
  // Configurer le DOM avant chaque test
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="add-class-button">Add Class</button>
      <div id="element" class="initial-class"></div>
    `;
  });

  test('adds new-class to the element when button is clicked', () => {
    // Simuler le chargement du DOM
    document.dispatchEvent(new Event('DOMContentLoaded'));

    // Obtenir les références aux éléments
    const button = document.getElementById('add-class-button');
    const element = document.getElementById('element');

    // Vérifier la classe initiale
    expect(element.classList.contains('initial-class')).toBe(true);
    expect(element.classList.contains('new-class')).toBe(false);

    // Simuler un clic sur le bouton
    button.click();

    // Vérifier que la nouvelle classe a été ajoutée
    expect(element.classList.contains('initial-class')).toBe(true);
    expect(element.classList.contains('new-class')).toBe(true);
  });
});


