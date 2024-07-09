// script.js (ou ex4.js)
import { fetchData } from './api.js';

async function displayData() {
  try {
    const weatherData = await fetchData();
    const paragraphElement = document.getElementById('paragraph');
    if (paragraphElement) {
      paragraphElement.textContent = `Weather data: City - ${weatherData.city}, Temperature - ${weatherData.temperature}°C`;
    } else {
      console.error('Element with id "paragraph" not found');
    }
  } catch (error) {
    console.error('Error fetching or displaying data:', error);
  }
}

// Écouteur d'événement pour DOMContentLoaded
document.addEventListener('DOMContentLoaded', displayData);

// Garder la fonctionnalité du bouton de suppression
document.addEventListener('DOMContentLoaded', () => {
  const removeButton = document.getElementById('remove-paragraph-button');
  const paragraphContainer = document.getElementById('paragraph-container');
  
  if (removeButton && paragraphContainer) {
    removeButton.addEventListener('click', () => {
      paragraphContainer.innerHTML = '';
    });
  } else {
    console.error('Button or container not found');
  }
});