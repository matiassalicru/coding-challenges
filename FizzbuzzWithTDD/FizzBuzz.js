const fizzbuzz = (num) => {
    if ( num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    }

    if (num % 3 === 0) {
        return 'fizz';
    }

    if (num % 5 === 0) {
        return 'buzz';
    }

    return num;

}

module.exports = fizzbuzz;