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
const getRandom = require("./src/node/random");
const generator = require("./src/node/generator");
const utils = require("./src/node/utils");


module.exports.fast = primes.fast;
module.exports.prime = primes.prime;
module.exports.fastOld = primes.fastOld;
module.exports.primeOld = primes.primeOld;
module.exports.recursive = primesAlternateWay.isPrimeConventionalWay;
module.exports.sqroot = primesAlternateWay.isPrimeSquarerootWay;
module.exports.sqrootOptimised = primesAlternateWay.isPrimeSquarerootOptimised;
module.exports.aks = primesAlternateWay.isPrimeSquarerootWay;

const isPrime = {
    fastOld: primes.fastOld,
    primeOld: primes.primeOld,
    fast: primes.fast,
    prime: primes.prime,
    recursive: primesAlternateWay.isPrimeConventionalWay,
    sqroot: primesAlternateWay.isPrimeSquarerootWay,
    sqrootOptimised: primesAlternateWay.isPrimeSquarerootOptimised,
    sqrootPerformance: primesAlternateWay.isPrimeSquarerootWayReturnValue,
    primePerformance: primes.primeReturnValue,
    aks: primesAlternateWay.isPrimeSquarerootWay
}

module.exports.isPrime = isPrime;

module.exports.range = {
    alternates: getBetweenRange.alternates,
    alternatesOptimized: getBetweenRange.alternatesOptimized,
    fast: getBetweenRange.fast,
    fastOptimized: getBetweenRange.fastOptimized
}

module.exports.count = {
    alternates: getCount.alternates,
    alternatesOptimized: getCount.alternatesOptimized,
    fast: getCount.fast,
    fastOptimized: getCount.fastOptimized
}

module.exports.random = {
    get: getRandom.getRandomInteger,
    prime: getRandom.randomPrime,
    primesArray: getRandom.generateRandomPrimes,
    range: getRandom.generatePrimesinRange,
    counts: getRandom.generatePrimesinCounts
}

module.exports.utils = {
    nextPrime: utils.nextPrime,
    previousPrime: utils.previousPrime,
    nextPrimeSets: utils.nextPrimeSets,
    previousPrimeSets: utils.previousPrimeSets
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

module.exports.generator = {
    counts: generator.primesinCounts,
    range: generator.primesinRange,
    random: generator.randomPrimes,
    generatorPrimes: generator.generatorPrimes
}

module.exports.default = isPrime;
