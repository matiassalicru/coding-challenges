const fizzbuzz = (num) => {

    // If num is multiple of 5 and multiple of 3 return 'fizzbuzz'
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    }

    // If num is multiple of 3 return 'fizz'
    if (num % 3 === 0) {
        return 'fizz';
    }

    // If num is multiple of 5 return 'buzz'
    if (num % 5 === 0) {
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

print(16)

module.exports = fizzbuzz;