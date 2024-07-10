// Déclarer des fonctions pour inscrire les données des requêtes API
const RENNES_LAT = 48.117266;
const RENNES_LON = -1.677793;
const API_KEY = '08cb792ca8906ae401dad848ccb6410d';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${RENNES_LAT}&lon=${RENNES_LON}&appid=${API_KEY}`;

//déclaration et exportation de la fonction asynchrone "fetchData"
    // Asynchrone = permet d'exécuter un code sans bloquer l'exécution du reste du programme. 
      // l'utilisation de la fonction 'async' permet d'utiliser l'instruction 'await' pour attendre la résolution d'une promesse
      // résolution d'une promesse = pause l'exécution de la fonction jusqu'à ce que la "promesse" de fournir un résultat à un moment donné dans le futur soit résolue.
      // une promesse est un objet représentant une opération asynchrone, utilisé à gérer le résultat/erreur d'une opération qui prendra du temps à s'exécuter. 
export const fetchData = async () => {
  //bloc 'try-catch' pour gérer les erreurs potentiels
      // try-catch = 'try' va contenir le code qui pourrait potentiellement générer une erreur et 'catch' capture et gère l'erreur si elle survient. 
  try {    
    //requête à l'API (parcourt l'API pour aller trouver les infos)
    const response = await fetch(API_URL);    
    //vérifier si requête ok, sinon = erreur
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    //convertit la réponse en json 
        // pourquoi ? Lors d'une requête HTTP pour obtenir des données, la réponse est donnée au format JSON. 
        // pour les utiliser dans le programme, écrit en JS, il faut le convertir en 'objet' JS, et 'response.json()' fait cette conversion.
    const data = await response.json();    
    //convertisseur Kelvin - Celsius
    const temperatureCelsius = data.main.temp - 273.15;
    
    const result = {
      city: 'Rennes',
      //température arrondie à la décimale
      temperature: temperatureCelsius.toFixed(1)
    };
    return result;
    //Et ici : Capture toute erreur qui pourrait se produire dans le bloc try et la relance.
  } catch (error) {
    throw error;
  }
};
