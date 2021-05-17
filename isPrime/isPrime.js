/*
    Determina si un número es primo o compuesto.
*/

const isPrime = num => {

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return num > 1;
}

isPrime(25)