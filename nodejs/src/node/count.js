/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/

const { prime } = require("./primes.js");
const { isPrimeConventionalWay, isPrimeSquarerootWay, isPrimeSquarerootWayTwo } = require("./primes_alternate.js");


function alternateWays(start, count, functionName = "isPrimeSquarerootWayTwo") {
    let primes = [], counter = 0, i = start;
    if (!functionName) {
        throw new Error("[fast-prime]: range.js: AlternateWays: Invalid Option: ", functionName)
    }
    while (counter != count) {
        if ((i === 2 || i === 3 || i === 5 || i === 7)) {
            primes.push(i);
            i++;
            continue;
        }
        if (i === 1 || ((i > 7) && (i % 5 == 0 || i % 7 == 0 || i % 2 == 0 || i % 3 == 0))) {
            i++;
            continue;
        }
        if (functionName === "isPrimeConventionalWay") {
            if (isPrimeConventionalWay(i)) {
                primes.push(i);
                counter++;
            };
        } else if (functionName === "isPrimeSquarerootWay") {
            if (isPrimeSquarerootWay(i)) {
                primes.push(i);
                counter++;
            };
        } else if (functionName === "isPrimeSquarerootWayTwo") {
            if (isPrimeSquarerootWayTwo(i)) {
                primes.push(i);
                counter++;
            };
        } else if (functionName === "primes") {
            if (prime(i)) {
                primes.push(i);
                counter++;
            };
        }
        i++;
    }
    return { count: primes.length, primes: primes };
}

function alternateWaysOptimized(start, count, functionName = "isPrimeSquarerootWayTwo") {
    let primes = [], counter = 0, i = start;
    if (start < 10000) { primesApi = require("./10000") }
    if (start < 100000) { primesApi = require("./100000") };
    if (start < 1000000) { primesApi = require("./1000000") };
    if (!(start > 1000000) && !!primes.length) {
        primes = primesApi.filter((i) => {
            if (i >= start && counter < count) {
                primes.push(i);
                counter++;
                // console.log(i, counter);
                return i;
            }
        })
        // console.log({ count: counter, primes: primes });
        if (counter !== count && primes.length !== count) {
            throw new Error("[fast-prime]: count.js: alternateWaysOptimized: Prime numbers checks issue with the provided function: ");
        }
        return { count: counter, primes: primes };
    }
    return alternateWays(start, count, functionName);
}

function fast(start, count) {
    let primes = [], counter = 0, i = start;
    let apiPrimes = require("./primes");

    while (counter != count) {
        // console.log(start, counter, count);
        if ((i === 2 || i === 3 || i === 5 || i === 7)) {
            primes.push(i);
            counter++;
            i++;
            continue;
        }
        if (i === 1 || ((i > 7) && (i % 5 == 0 || i % 7 == 0 || i % 2 == 0 || i % 3 == 0))) {
            i++;
            continue;
        }
        if ((Number.isInteger(((i - 1) / 6))) || (Number.isInteger((i + 1) / 6))) {
            if (!!prime(i)) {
                primes.push(i);
                counter++;
            };
        }
        i++;
    }

    if (counter !== count && primes.length !== count) {
        throw new Error("[fast-prime]: count.js: fastOptimized: Prime numbers checks issue with the provided function: ");
    }
    return { count: counter, primes: primes };
}

function fastOptimized(start, count) {
    let primes = [], counter = 0, i = start;
    if (start < 10000) { primesApi = require("./10000") }
    if (start < 100000) { primesApi = require("./100000") };
    if (start < 1000000) { primesApi = require("./1000000") };
    if (!(start > 1000000) && !!primes.length) {
        primes = primesApi.filter((i) => {
            if (i >= start && counter < count) {
                primes.push(i);
                counter++;
                // console.log(i, counter);
                return i;
            }
        })
        // console.log({ count: counter, primes: primes });
        if (counter !== count && primes.length !== count) {
            throw new Error("[fast-prime]: count.js: fastOptimized: Prime numbers checks issue with the provided function: ");
        }
        return { count: counter, primes: primes };
    }
    return fast(start, count);
}

module.exports.alternates = alternateWays;
module.exports.alternatesOptimized = alternateWaysOptimized;
module.exports.fast = fast;
module.exports.fastOptimized = fastOptimized;

