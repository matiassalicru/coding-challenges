/*
  Función que retorna la suma de los 4 números más grandes del array, si el array tiene 4 
  números o menos, retorna la suma de todos.
*/

function ArrayAdditionI(arr) {
  let largest = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > largest) {
  //     largest = arr[i];
  //   }
  // }

  for (const num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  console.log(largest);
  return largest;
}

ArrayAdditionI([1, 6, 3, 1]);

// EJERCICIO DE ENTREVISTA SYSTEM2

function LargestFour(arr) {
  // If the array length if less or equal 4, return the sum of all numbers in the array
  if (arr.length <= 4) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  // sort the numbers from the max to min
  const sortered = arr.sort((a, b) => b - a);

  // Create a new array with only the 4 larguest numbers on the original array
  const largestFour = sortered.splice(0, 4);

  // Sum the numbers in the array with the 4 largest numbers
  let result = 0;
  for (let i = 0; i < largestFour.length; i++) {
    result += largestFour[i];
  }

  // code goes here
  return result;
}

// keep this function call here
console.log(LargestFour(readline()));
