function initializeForm() {
  const emailForm = document.getElementById('email-form');
  const emailInput = document.getElementById('email-input');
  //récupère l'ID lié à l'emplacement où le message de validation/erreur va se placer. 
  const validationMessage = document.getElementById('validation-message');

  function validateEmail() {
    //crée une constante pour la zone où l'utilisateur note son mail
    const email = emailInput.value;
    //ici on décrit les caractères qui seront utilisé (appelé 'Regex' (Regular Expression))
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    //cette condition va vérifier si le mail est valide ou pas, en testant les caractères utilisés avec emailPattern
    if (emailPattern.test(email)) {
      validationMessage.textContent = "Email valide !";
      validationMessage.style.color = "green";
    } else {
      validationMessage.textContent = "Email invalide. Veuillez entrer une adresse email valide.";
      validationMessage.style.color = "red";
    }
  }

  /* Cette condition vérifie si emailForm existe (pour éviter des erreurs si l'élément n'est pas trouvé dans 
  le DOM). Si oui, elle ajoute un écouteur d'événements sur la soumission du formulaire. e.preventDefault() 
  empêche le formulaire d'être soumis normalement (ce qui rechargerait la page), permettant ainsi de valider 
  l'email sans recharger la page. */
  if (emailForm) {
    //
    emailForm.addEventListener('submit', function (e) {
      e.preventDefault();
      validateEmail();
    });
  }
  //retourne la fonction validateEmail, la rendant accessible à l'extérieur de initializeForm.
  return { validateEmail };
}

/* vérifie si le code s'exécute dans un navigateur (où window existe) et, si oui, 
  initialise le formulaire une fois que le DOM est entièrement chargé. */
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initializeForm);
}

// Pour les tests
/* Cette partie est pour l'environnement Node.js (comme dans les tests), 
   permettant d'exporter la fonction initializeForm pour qu'elle puisse être importée ailleurs. */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeForm };
}
