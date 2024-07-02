const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Lire le contenu du fichier HTML
const html = fs.readFileSync(path.resolve(__dirname, '..', '..', 'index.html'), 'utf8');

// Créer un DOM virtuel à partir du fichier HTML
const dom = new JSDOM(html, { runScripts: "dangerously" });

// Définir global.document et global.window
global.document = dom.window.document;
global.window = dom.window;

// Importer le script à tester
require('./ex1');

describe('addClassToElement function', () => {
  test('adds bg-danger class to element when button is clicked', () => {
    const addButton = document.getElementById('add-class-button');
    const element = document.getElementById('element');

    // Vérifier l'état initial
    expect(element.classList.contains('bg-danger')).toBe(false);

    // Simuler un clic sur le bouton
    addButton.click();

    // Vérifier que la classe a été ajoutée
    expect(element.classList.contains('bg-danger')).toBe(true);
  });

});