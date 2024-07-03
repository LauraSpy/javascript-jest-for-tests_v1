//importe la fonction initializeForm depuis votre fichier principal ex3.js.
const { initializeForm } = require('./ex3');

//describe crée un groupe de tests liés. Ici, tous les tests concernent la fonction validateEmail.
describe('validateEmail function', () => {
    //Déclare une variable pour stocker la fonction validateEmail. 
  //On la déclare ici pour pouvoir l'utiliser dans tous les tests.
  let validateEmail;

  //beforeEach est une fonction qui s'exécute avant chaque test. Elle prépare l'environnement pour chaque test.
  beforeEach(() => {
    // Cette partie crée un faux HTML dans le test. C'est comme si on avait ces éléments dans une vraie page web.
    document.body.innerHTML = `
      <form id="email-form">
        <input id="email-input" />
        <p id="validation-message"></p>
      </form>
    `;  
    
    // Ces lignes initialisent le formulaire et récupèrent la fonction validateEmail pour l'utiliser dans les tests.
    const form = initializeForm();
    validateEmail = form.validateEmail;
  });

  //Ceci définit un test spécifique. Le texte décrit ce que le test doit vérifier.
  test('should validate a correct email', () => {
    //Cette ligne simule l'entrée d'un email dans le champ de formulaire.
    document.getElementById('email-input').value = 'test@example.com';
    //Appelle la fonction que nous testons.
    validateEmail();
    //Cette ligne vérifie si le message affiché est correct. expect est utilisé pour faire une vérification, et toBe compare le résultat avec ce qu'on attend.
    expect(document.getElementById('validation-message').textContent).toBe("Email valide !");
  });

  test('should invalidate an incorrect email', () => {
    document.getElementById('email-input').value = 'test@example';
    validateEmail();
    expect(document.getElementById('validation-message').textContent).toBe("Email invalide. Veuillez entrer une adresse email valide.");
  });
});
