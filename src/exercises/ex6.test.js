import { findMaxValue, removeDuplicates, includesValue, sortAscending } from './ex6';

/* 

- Nous importons les fonctions depuis ex6.js.
- Nous utilisons 'describe' pour grouper les tests par fonction, permet une hiérarchie des test, un "nesting' (imbrication), et permet au code du test d'être plus flexible.
- Chaque fonction a au moins deux tests : un pour le cas normal et un pour un cas limite (comme un tableau vide).
- Nous utilisons expect() avec différentes méthodes comme toBe(), toEqual(), et toBeNull() pour vérifier les résultats.

*/


//BLOC PRINCIPAL DU TEST : tests liés aux fonctions utilitaires du tableau
describe('Array Utility Functions', () => {
  // SOUS-BLOC : Tests spécifique pour findMaxValue
  describe('findMaxValue', () => {
    test('finds the maximum value in an array of numbers', () => {
      expect(findMaxValue([1, 3, 5, 2, 4])).toBe(5);
    });

    test('returns null for an empty array', () => {
      expect(findMaxValue([])).toBeNull();
    });
  });

  // SOUS-BLOC : Tests pour removeDuplicates
  describe('removeDuplicates', () => {
    test('removes duplicate values from an array', () => {
      expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('returns an empty array when given an empty array', () => {
      expect(removeDuplicates([])).toEqual([]);
    });
  });

  // SOUS-BLOC : Tests pour includesValue
  describe('includesValue', () => {
    test('returns true if the array includes the specific value', () => {
      expect(includesValue([1, 2, 3, 4, 5], 3)).toBe(true);
    });

    test('returns false if the array does not include the specific value', () => {
      expect(includesValue([1, 2, 3, 4, 5], 6)).toBe(false);
    });
  });

  // SOUS-BLOC : Tests pour sortAscending
  describe('sortAscending', () => {
    test('sorts an array of numbers in ascending order', () => {
      expect(sortAscending([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });

    test('returns an empty array when given an empty array', () => {
      expect(sortAscending([])).toEqual([]);
    });
  });
});

