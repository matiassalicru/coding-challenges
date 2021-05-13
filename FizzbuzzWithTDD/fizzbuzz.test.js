const { expect } = require('@jest/globals');
const fizzbuzz = require('./FizzBuzz');

describe('Should print fizz or buzz depending on the multiple', () => {

    test('should print 1 if it receive 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(result).toBe(expected);
    })

    test('should print fizz if the number is multiple of 3', () => {
        const expected = 'fizz';
        const result = fizzbuzz(9);
        expect(result).toBe(expected);
    })

    test('should print buzz if the number is multiple of 5', () => {
        const expected = 'buzz';
        const result = fizzbuzz(10);
        expect(result).toBe(expected);
    })

    test('should print fizzbuzz if it receive a multiple of 3 and 5', () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(result).toBe(expected);
    })

})
