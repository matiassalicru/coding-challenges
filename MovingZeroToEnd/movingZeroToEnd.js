/* 
  Escriba un algoritmo que tome un array y mueva todos los ceros al final, perseverando el orden de los otros elementos
*/

// SOLUCIÓN 1
var moveZeros = function (arr) {
  //TODO
  const noCeros = [];
  const ceros = [];

  arr.foreach((elemento) => {
    if (elemento === 0) {
      ceros.push(elemento);
    } else {
      noCeros.push(elemento);
    }
  });

  return noCeros.concat(ceros);
};

// SOLUCIÓN 2
var moveZeros = function (arr) {
  const [noCeros, ceros] = arr.reduce(
    ([noCeros, ceros], elemento) => {
      if (elemento === 0) {
        return [noCeros, [...ceros, elemento]];
      } else {
        return [[...noCeros, elemento], ceros];
      }
    },
    [[], []]
  );

  return noCeros.concat(ceros);
};

// SOLUCIÓN 3
var moveZeros = function (arr) {
  const { noCeros, ceros } = arr.reduce(
    ({ noCeros, ceros }, elemento) => {
      if (elemento === 0) {
        return { noCeros, ceros: [...ceros, elemento] };
      } else {
        return { noCeros: [...noCeros, elemento], ceros };
      }
    },
    { ceros: [], noCeros: [] }
  );

  return noCeros.concat(ceros);
};

// SOLUCIÓN 4
var moveZeros = function (arr) {
  // Creo un array con todos los elementos que no son ceros
  const arrSinCeros = arr.filter((elemento) => elemento !== 0);
  // Crea un array de largo igual a la cantidad de ceros que hay en el original
  // Y lleva ese array con 0 .fill(0)
  const ceros = new Array(arr.length - arrSinCeros.length).fill(0);

  // Concatena los arrSinCeros con ceros
  return arrSinCeros.concat(ceros);
};
