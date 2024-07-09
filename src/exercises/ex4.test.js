// Importez la fonction fetchData depuis le fichier api.js
import { fetchData } from './api';

// Importez la bibliothèque fetch-mock pour simuler les appels API
import fetchMock from 'jest-fetch-mock';

// Activez les mocks fetch pour tous les tests dans ce fichier
fetchMock.enableMocks();

// Groupe de tests pour la fonction fetchData
describe('fetchData function', () => {
  // Avant chaque test, réinitialisez les mocks fetch
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  // Test : vérifier si fetchData renvoie les données correctes
  test('returns weather data for Rennes', async () => {
    // Simulez une réponse API avec des données météo fictives
    fetchMock.mockResponseOnce(JSON.stringify({
      main: { temp: 293.15 } // 20°C en Kelvin
    }));

    // Appelez la fonction fetchData
    const result = await fetchData();

    // Vérifiez si fetch a été appelé avec la bonne URL
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('api.openweathermap.org/data/2.5/weather')
    );

    // Vérifiez si le résultat contient les bonnes données
    expect(result).toEqual({
      city: 'Rennes',
      temperature: '20.0' // 20°C après conversion
    });
  });



  /* ICI UN TEST POUR GENERER UN CODE D'ERREUR */
  // // Test : vérifier si fetchData gère correctement les erreurs
  // test('handles API errors', async () => {
  //   // Simulez une erreur de réseau
  //   fetchMock.mockRejectOnce(new Error('API is down'));

  //   // Vérifiez si la fonction fetchData lance une erreur
  //   await expect(fetchData()).rejects.toThrow('API is down');
  // });

  // Test : vérifier si fetchData gère les réponses non-OK


  test('handles non-OK responses', async () => {
    // Simulez une réponse 404 Not Found
    fetchMock.mockResponseOnce(JSON.stringify({ message: 'Not found' }), { status: 404 });

    // Vérifiez si la fonction fetchData lance une erreur
    await expect(fetchData()).rejects.toThrow('Network response was not ok');
  });
});



/* NOTE POUR SE SOUVENIR DU CODE DE TEST :

Explications détaillées :

- Imports :
    Nous importons fetchData depuis api.js.
    Nous importons fetch-mock pour simuler les appels API.

- Configuration :
    fetchMock.enableMocks() active la simulation des appels fetch pour tous les tests.

- Groupe de tests :
    describe regroupe tous les tests liés à fetchData.

- Réinitialisation avant chaque test :
    beforeEach réinitialise les mocks fetch avant chaque test pour éviter les interférences.

- Test de succès :
    Nous simulons une réponse API réussie avec fetchMock.mockResponseOnce.
    Nous appelons fetchData et vérifions si :
        L'URL de l'API est correcte.
        Les données renvoyées sont correctement formatées.

- Test d'erreur réseau :
    Nous simulons une erreur de réseau avec fetchMock.mockRejectOnce.
    Nous vérifions si fetchData lance bien une erreur.
- Test de réponse non-OK :
    Nous simulons une réponse 404 avec fetchMock.mockResponseOnce.
    Nous vérifions si fetchData gère correctement cette situation.


Pour exécuter ces tests :
    Assurez-vous d'avoir Jest installé (npm install --save-dev jest).
    Ajoutez "test": "jest" dans la section scripts de votre package.json.
    Exécutez npm test dans votre terminal.
        

Ces tests couvrent les scénarios de base pour votre fonction fetchData. Ils vérifient le bon fonctionnement en cas de succès et la gestion appropriée des erreurs.


    */