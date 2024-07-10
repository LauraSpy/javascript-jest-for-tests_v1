import { fetchData } from './api.js';

async function displayData() {
  try {
    const weatherData = await fetchData();
    const paragraphElement = document.getElementById('paragraph');
    if (paragraphElement) {
      paragraphElement.textContent = `Weather data: City - ${weatherData.city}, Temperature - ${weatherData.temperature}°C`;
    } 
}

// Écouteur d'événement pour DOMContentLoaded
document.addEventListener('DOMContentLoaded', displayData);

//'addEventListener' = dit au navigateur de surveiller un certain type d'événement et d'exécuter une fonction spécifique quand cet événement se produit

//'DOMContentLoaded' est l'événement "écouter" dans ce code. 
//Cet événement se déclenche lorsque le document HTML initial a été complètement chargé et analysé, sans attendre que les feuilles de style, images et sous-frames aient terminé de charger.

//'displayData' est la fonction exécutée lorsque l'événement 'DOMContentLoaded' se produit. 