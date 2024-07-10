
// Fonction pour trouver la valeur maximale dans un tableau de nombres
export function findMaxValue(arr) {
    if (arr.length === 0) return null;
    /*
    en utilisation Math.max (fonction pour retourner le plus grand nombre), 
    on lui donne comme argument l'opérateur de décomposition (spread operator) = ...arr
    Donc Math.max(...arr) = Math.max(arr, arr, arr, ...) => permet de trouver le maximum dans le tableau 
    */
    return Math.max(...arr);
  }
  
  // Fonction pour supprimer les valeurs en double d'un tableau
  export function removeDuplicates(arr) {
    /*
    Va créer un objet Set (qui ne peut contenir que des valeurs unique, tout doublon sera supprimé), à partir du tableau,
    le mettre entre crochet, avec ... devant, permet de le définir comme un spread operator, 
    ce qui le convertit en nouveau tableau, sans doublons    
    */
    return [...new Set(arr)];
  }
  
  // Fonction pour vérifier si un tableau inclut une valeur spécifique
  export function includesValue(arr, value) {
    /* 
    'includes' (méthode native des tableaux JS), vérifie si le tableau contient une valeur spécifique
    return true si vrai, sinon false.
    */
    return arr.includes(value);
  }
  
  // Fonction pour trier un tableau de nombres par ordre croissant
  export function sortAscending(arr) {
    /* 
    [...arr] crée une copie du tableau original
    .sort (méthode pour trier le tableau) vient le modifier (d'où la copie du tableau orginal)
    puis il y a une fonction de comparaison, qui permet de faire un tri des nombres par ordre croissant (1) 
    */
    return [...arr].sort((a, b) => a - b);
  }


  /* (1)  Si elle retourne un nombre négatif, a est placé avant b.
          Si elle retourne un nombre positif, b est placé avant a.
          Si elle retourne 0, l'ordre de a et b ne change pas.
  */


  /* 

  EXPLICATIONS : 

- findMaxValue : utilise Math.max() avec l'opérateur spread pour trouver la valeur maximale.
- removeDuplicates : utilise un Set pour éliminer les doublons.
- includesValue : utilise la méthode includes() native des tableaux.
- sortAscending : utilise la méthode sort() avec une fonction de comparaison pour trier les nombres.

*/