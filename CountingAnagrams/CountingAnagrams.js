// Función de comparación para el método sort del array utilizado abajo para ordenar de menor a mayor los números
function compareNumbers(a, b) {
  return a - b;
}

// Ordena los números del array de menor a mayor
function sortNumbers(arr) {
  const sorted = arr.sort(compareNumbers);
  console.log(sorted);
}

// sortNumbers([2, 4, 1, 23, 12]);

// Devuelve un array con las palabras que son anagramas agrupadas en arrays
function countingAnagrams(arr) {
  const result = new Map();
  let count = 0;

  for (const str of arr) {
    const sorted = str.toLowerCase().split('').sort().join('');
    if (result.has(sorted)) {
      count += 1;
      result.get(sorted).push(str);
    } else {
      result.set(sorted, [str]);
    }
  }
  console.log(count);
  return Array.from(result.values());
}

console.log(
  countingAnagrams(['abc', 'cba', 'acb', 'Zwasd', 'tan', 'Eat', 'Ate'])
);

//Verifica si dos palabras son anagramas
function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// isAnagram('#tea', 'aTE');

// EJERCICIO DE ENTREVISTA SYSTEM2

function CountingAnagrams(str) {
  const splitted = str.split(' ');
  let counterOfAnagrams = 0;
  const result = new Map();

  // Look for repeated words to splice from the initial array
  for (const word of splitted) {
    let count = 0;
    for (const word2 of splitted) {
      if (word === word2) {
        count += 1;
        if (count > 1) {
          splitted.splice(splitted.indexOf(word), 1);
        }
      }
    }
  }

  // Set in a Map the anagramic words
  for (const string of splitted) {
    const sorted = string.split('').sort().join('');
    if (result.has(sorted)) {
      result.get(sorted).push(string);
    } else {
      result.set(sorted, [string]);
    }
  }

  // Create an Array with the values of the Map
  const newResult = Array.from(result.values());

  // Counts the length of the Array extracting 1 if the word repeats more than one time
  for (const res of newResult) {
    if (res.length > 1) {
      counterOfAnagrams += res.length - 1;
    }
  }

  // code goes here
  return counterOfAnagrams;
}

// keep this function call here

// console.log(CountingAnagrams(readline()));
