/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/

const primes = require("./src/node/primes");
const primesAlternateWay = require("./src/node/primes_alternate_ways");

module.exports = {
    fast: primes.prime,
    prime: primes.prime,
    recursive: isPrimeConventionalWay,
    sqroot: primesAlternateWay.isPrimeSquarerootWayTwo,
    sqrootExpressive: primesAlternateWay.isPrimeSquarerootWay,
}

