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
const primesAlternateWay = require("./src/node/primes_alternate");
const getBetweenRange = require("./src/node/range");
const getCount = require("./src/node/count");
const getSum = require("./src/node/sum");
const getFactorial = require("./src/node/factorial");


module.exports.fast = primes.fast
module.exports.prime = primes.prime
module.exports.recursive = primesAlternateWay.isPrimeConventionalWay
module.exports.sqroot = primesAlternateWay.isPrimeSquarerootWayTwo
module.exports.sqrootExpressive = primesAlternateWay.isPrimeSquarerootWay

const isPrime = {
    fast: primes.fast,
    prime: primes.prime,
    recursive: primesAlternateWay.isPrimeConventionalWay,
    sqroot: primesAlternateWay.isPrimeSquarerootWayTwo,
    sqrootExpressive: primesAlternateWay.isPrimeSquarerootWay
}

module.exports.isPrime = isPrime;

module.exports.range = {
    alternates: getBetweenRange.alternates,
    alternatesOptimized: getBetweenRange.alternatesOptimized,
    fast: getBetweenRange.fast,
    fastOptimized: getBetweenRange.fastOptimized
}

module.exports.sum = {
    alternatesCount: getSum.alternatesCount,
    alternatesCountOptimized: getSum.alternatesCountOptimized,
    alternatesRange: getSum.alternatesRange,
    alternatesRangeOptimized: getSum.alternatesRangeOptimized,
    fastCount: getSum.fastCount,
    fastCountOptimized: getSum.fastCountOptimized,
    fastRange: getSum.fastRange,
    fastRangeOptimized: getSum.fastRangeOptimized
}

module.exports.count = {
    alternates: getCount.alternates,
    alternatesOptimized: getCount.alternatesOptimized,
    fast: getCount.fast,
    fastOptimized: getCount.fastOptimized
}

module.exports.factorial = {
    alternatesCount: getFactorial.alternatesCount,
    alternatesCountOptimized: getFactorial.alternatesCountOptimized,
    alternatesRange: getFactorial.alternatesRange,
    alternatesRangeOptimized: getFactorial.alternatesRangeOptimized,
    fastCount: getFactorial.fastCount,
    fastCountOptimized: getFactorial.fastCountOptimized,
    fastRange: getFactorial.fastRange,
    fastRangeOptimized: getFactorial.fastRangeOptimized
}

module.exports.default = isPrime;
