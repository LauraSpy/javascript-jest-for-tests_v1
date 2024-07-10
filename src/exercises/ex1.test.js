import { addClassToElement, changeButtonStyle } from './ex1';

describe('addClassToElement function', () => {
  // Configurer le DOM (la simulation de l'environnement HTML) avant chaque test
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="add-class-button">Add Class</button>
      <div id="element" class="initial-class"></div>
    `;
  });

  test('adds new-class to the element when button is clicked', () => {
    // Simuler le chargement du DOM (vérifie que le DOM a bien été chargé avant de simuler le clic sur le bouton)
    document.dispatchEvent(new Event('DOMContentLoaded'));

    // Obtenir les références aux éléments
    const button = document.getElementById('add-class-button');
    const element = document.getElementById('element');

    // Vérifier la classe initiale (avant le click)
    expect(element.classList.contains('initial-class')).toBe(true);
    expect(element.classList.contains('new-class')).toBe(false);
    expect(button.style.color).not.toBe('red');
    expect(button.style.borderColor).not.toBe('red')

    // Simuler un clic sur le bouton
    button.click();

    // Vérifier que la nouvelle classe a été ajoutée (après le clic)
    expect(element.classList.contains('initial-class')).toBe(true);
    expect(element.classList.contains('new-class')).toBe(true);
    expect(button.style.color).toBe('red');
    expect(button.style.borderColor).toBe('red');
  });
});

//La vérification avant et après le clic sont nécessaires pour vérifier que la classe est ajoutée correctement. 

// 'expect' = fonction de Jest pour créer des assertions, vérifie si une condition est vraie : 
/* Comment fonctionne expect ?
  expect(value) prend une valeur et renvoie un objet "expectation".
  Cet objet a des méthodes (comme toBe, toEqual, etc.) pour comparer la valeur avec un résultat attendu. */
