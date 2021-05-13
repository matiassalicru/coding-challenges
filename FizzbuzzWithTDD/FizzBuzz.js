// Function to know if the number is divisible with the divisor.

const divisible = (num, divisor) => {
    if (num % divisor === 0) {
        return true;
    }
    return false;
}

const fizzbuzz = (num) => {

    // If num is multiple of 5 and multiple of 3 return 'fizzbuzz'
    if (divisible(num, 3) && divisible(num, 5)) {
        return 'fizzbuzz';
    }

    // If num is multiple of 3 return 'fizz'
    if (divisible(num, 3)) {
        return 'fizz';
    }

    // If num is multiple of 5 return 'buzz'
    if (divisible(num, 5)) {
        return 'buzz';
    }

    return num;
}

// Function to print number from zero to the passed number executing fizzbuzz function.
const print = (num) => {
    for (let i = 0; i < num; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

// print(16)

// Fizzbuzz for the numbers from zero to the passed number.
const fizzbuzzArr = (num) => {
    // For cycle starting at 1 to fix bugs with 0
    for (let i = 1; i <= num; i++) {
        if (divisible(i, 3) && divisible(i, 5)) {
            console.log('fizzbuzz');
        } else if (divisible(i, 3)) {
            console.log('fizz');
        } else if (divisible(i, 5)) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzbuzzArr(15)


module.exports = fizzbuzz;