// Importez la fonction fetchData depuis le fichier api.js : c'est la fonction testée
import { fetchData } from './api';

// Importez la bibliothèque fetch-mock pour simuler les appels API (qui sont utilisées dans Fetch)
      // importer la possibilité de simuler des appels API permet de ne pas utiliser de crédit en utilisant des API payantes
import fetchMock from 'jest-fetch-mock';

// Active la simulation (mocks) des appels 'fetch' pour tous les tests dans ce fichier
fetchMock.enableMocks();

// Groupe de tests pour la fonction fetchData (tous les tests à l'intérieur de ce bloc sont liés à cette fonction)
describe('fetchData function', () => {
  // Avant chaque test individuel, réinitialise les mocks fetch : garantit que chaque test commence avec un état propre
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  // Test : vérifier si fetchData renvoie les données correctes
  test('returns weather data for Rennes', async () => {
    // Simule une réponse API avec des données météo fictives
    fetchMock.mockResponseOnce(JSON.stringify({
      main: { temp: 293.15 } // 20°C en Kelvin
    }));

    // Appel de la fonction fetchData
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

  // Test : vérifier si fetchData gère les réponses non-OK
        //  important car il vérifie la gestion des erreurs HTTP

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