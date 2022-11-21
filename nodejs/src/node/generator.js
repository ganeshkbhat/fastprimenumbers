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
const random = require("./random");


/**
 *
 *
 * @param {number} [start=0]
 * @param {number} [count=1]
 */
function* primesinCounts(start = 0, count = 1) {
    let arr = random.generatePrimesinCounts(start, count).primes;
    while (true) {
        if (!!arr.length) {
            yield arr.shift();
        } else { 
            break;
        }
    }
    return;
}


/**
 *
 *
 * @param {number} [start=0]
 * @param {*} end
 */
function* primesinRange(start = 0, end) {
    let arr = random.generatePrimesinRange(start, end).primes;
    while (true) {
        if (!!arr.length) {
            yield arr.shift();
        } else { 
            break;
        }
    }
    return;
}


/**
 *
 *
 * @param {number} [count=1]
 * @param {number} [digits=2]
 */
function* randomPrimes(count = 1, digits = 2) {
    let arr = random.generateRandomPrimes(count, digits);
    while (true) {
        if (!!arr.length) {
            yield arr.shift();
        } else { 
            break;
        }
    }
    return;
}


/**
 *
 *
 * @param {number} [count=1]
 */
function* generatorPrimes(count = 1) {
    let arr = random.generatePrimesinCounts(0, count).primes;
    while (true) {
        if (!!arr.length) {
            yield arr.shift();
        } else { 
            break;
        }
    }
    return;
}


module.exports.primesinCounts = primesinCounts;
module.exports.primesinRange = primesinRange;
module.exports.randomPrimes = randomPrimes;
module.exports.generatorPrimes = generatorPrimes;
