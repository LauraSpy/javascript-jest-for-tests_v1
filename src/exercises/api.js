// Constants for API request
const RENNES_LAT = 48.117266;
const RENNES_LON = -1.677793;
const API_KEY = '08cb792ca8906ae401dad848ccb6410d';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${RENNES_LAT}&lon=${RENNES_LON}&appid=${API_KEY}`;

export const fetchData = async () => {
  console.log('fetchData function called');
  try {
    console.log('API URL:', API_URL);
    
    const response = await fetch(API_URL);
    console.log('Response received:', response.status, response.statusText);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log('Data received:', data);
    
    const temperatureCelsius = data.main.temp - 273.15;
    
    const result = {
      city: 'Rennes',
      temperature: temperatureCelsius.toFixed(1)
    };
    console.log('Returning result:', result);
    return result;
  } catch (error) {
    console.error('Error in fetchData:', error);
    throw error;
  }
};

// Example of how to use the API (for reference, not part of the module)
const exampleUsage = () => {
  console.log('Example API URL:', API_URL);
};