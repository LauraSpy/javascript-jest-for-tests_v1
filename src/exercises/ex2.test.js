// ex2.test.js
const { showMessage } = require('./ex2');

describe('showMessage function', () => {
  test('returns the correct message', () => {
    const result = showMessage();
    expect(result).toBe("Le bouton a été cliqué ! Le message a changé.");
  });

  test('changes the text content of the message element if it exists', () => {
    // Simuler un élément DOM
    const mockMessage = { textContent: 'Initial content' };
    global.message = mockMessage;

    showMessage();
  });
});
