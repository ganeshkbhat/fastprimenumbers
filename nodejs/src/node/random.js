/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


const primes = require("./primes");
const range = require("./range");
const countjs = require("./count");


/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function getRandomInteger(start, end) {
    if (!!start && !!end) {
        return Math.floor(Math.random() * (end - start)) + start;
    }
    return Math.random();
}


/**
 *
 *
 * @param {number} [digits=2]
 * @return {*} 
 */
function randomPrime(digits = 2) {
    let rand = getRandomInteger(Math.pow(10, digits - 1), Math.pow(10, digits))
    while (true) {
        if (primes.prime(rand)) {
            break;
        }
        rand++;
    }
    return rand;
}


/**
 *
 *
 * @param {number} [count=1]
 * @param {number} [digits=2]
 * @return {*} 
 */
function generateRandomPrimes(count = 1, digits = 2) {
    let primesArray = []
    for (let i = 0; i < count; i++) {
        primesArray.push(randomPrime(digits));
    }
    return primesArray;
}


/**
 *
 *
 * @param {*} start
 * @param {*} end
 * @return {*} 
 */
function generatePrimesinRange(start, end) {
    return range.fastOptimized(start, end);
}


/**
 *
 *
 * @param {*} start
 * @param {*} count
 * @return {*} 
 */
function generatePrimesinCounts(start, count) {
    return countjs.fastOptimized(start, count);
}


module.exports.getRandomInteger = getRandomInteger;
module.exports.randomPrime = randomPrime;
module.exports.generateRandomPrimes = generateRandomPrimes;
module.exports.generatePrimesinRange = generatePrimesinRange;
module.exports.generatePrimesinCounts = generatePrimesinCounts;
