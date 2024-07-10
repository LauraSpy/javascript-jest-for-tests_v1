import { fetchData } from './api.js';

async function displayData() {
  //j'utilise 'try' ici pour vérifier si j'ai une erreur ou pas, intéressant pour vérifier si je n'ai pas d'erreur pour récupérer les infos de l'API
  try {
    const weatherData = await fetchData();
    const paragraphElement = document.getElementById('paragraph');
    if (paragraphElement) {
      paragraphElement.textContent = `Weather data: City - ${weatherData.city}, Temperature - ${weatherData.temperature}°C`;
    } console.log(weatherData);
    // ici j'ajoute catch pour vérifier si je capte une erreur 
  } catch (error) {
    console.error('Error in displayData:', error);
  }
  /* on peut aussi finir la boucle "try" avec un "finally", ou même les deux, catch and finally 
    on peut aussi écrire dans le catch la possibilité qu'il continue malgré l'erreur */
}

// Écouteur d'événement pour DOMContentLoaded
document.addEventListener('DOMContentLoaded', displayData);

//'addEventListener' = dit au navigateur de surveiller un certain type d'événement et d'exécuter une fonction spécifique quand cet événement se produit

//'DOMContentLoaded' est l'événement "écouter" dans ce code. 
//Cet événement se déclenche lorsque le document HTML initial a été complètement chargé et analysé, sans attendre que les feuilles de style, images et sous-frames aient terminé de charger.

//'displayData' est la fonction exécutée lorsque l'événement 'DOMContentLoaded' se produit. 