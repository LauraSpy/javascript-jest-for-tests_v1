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

// document.addEventListener('DOMContentLoaded', () => {
//   const removeButton = document.getElementById('remove-paragraph-button');
//   const paragraphContainer = document.getElementById('paragraph-container');
  
//   if (removeButton && paragraphContainer) {
//     removeButton.addEventListener('click', () => {
//       paragraphContainer.innerHTML = '';
//     });
//   } else {
//     console.error('Button or container not found');
//   }
// });