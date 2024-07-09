// ex6.js

// Fonction pour trouver la valeur maximale dans un tableau de nombres
export function findMaxValue(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
  }
  
  // Fonction pour supprimer les valeurs en double d'un tableau
  export function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Fonction pour vérifier si un tableau inclut une valeur spécifique
  export function includesValue(arr, value) {
    return arr.includes(value);
  }
  
  // Fonction pour trier un tableau de nombres par ordre croissant
  export function sortAscending(arr) {
    return [...arr].sort((a, b) => a - b);
  }



  /* 

  EXPLICATIONS : 

- findMaxValue : utilise Math.max() avec l'opérateur spread pour trouver la valeur maximale.
- removeDuplicates : utilise un Set pour éliminer les doublons.
- includesValue : utilise la méthode includes() native des tableaux.
- sortAscending : utilise la méthode sort() avec une fonction de comparaison pour trier les nombres.

*/