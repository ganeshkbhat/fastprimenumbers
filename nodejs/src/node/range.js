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


function alternateWays(start, end, functionName = "isPrimeSquarerootWayTwo") {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if ((i === 2 || i === 3 || i === 5 || i === 7)) {
            primes.push(i);
            continue;
        }
        if (i === 1 || ((i > 7) && (i % 5 == 0 || i % 7 == 0 || i % 2 == 0 || i % 3 == 0))) {
            continue;
        }
        if (functionName === "isPrimeConventionalWay") {
            if (isPrimeConventionalWay(i)) {
                primes.push(i);
            };
        } else if (functionName === "isPrimeSquarerootWay") {
            if (isPrimeSquarerootWay(i)) {
                primes.push(i);
            };
        } else if (functionName === "isPrimeSquarerootWayTwo") {
            if (isPrimeSquarerootWayTwo(i)) {
                primes.push(i);
            };
        } else if (functionName === "primes") {
            if (prime(i)) {
                primes.push(i);
            };
        } else {
            throw new Error("[fast-prime]: range.js: AlternateWays: Invalid Option: ", functionName)
        }
    }
    return { count: primes.length, primes: primes };
}

function alternateWaysOptimized(start, end, functionName = "isPrimeSquarerootWayTwo") {
    let primes = [];
    if (start > end) { throw new Error("Start cannot be greater than end. Start: ", start, ", end: ", end); }
    if (end < 10000) { primes = require("./10000.js") }
    if (end < 100000) { primes = require("./100000.js") };
    if (end < 1000000) { primes = require("./1000000.js") };
    if (!(end > 1000000)) {
        primes = primes.filter(i => { return (i >= start && i <= end) });
        return { count: primes.length, primes: primes };
    }
    return alternateWays(start, end, functionName);
}

function fast(start, end) {
    let primes = [], count = 0;
    let apiPrimes = require("./primes");
    for (let i = start; i <= end; i++) {
        if ((i === 2 || i === 3 || i === 5 || i === 7)) {
            // console.log("count: Prime Unconventional way", count);
            count += 1;
            primes.push(i);
            continue;
        }
        if (i === 1 || ((i > 7) && (i % 5 == 0 || i % 7 == 0 || i % 2 == 0 || i % 3 == 0))) {
            continue;
        }
        if ((Number.isInteger(((i - 1) / 6))) || (Number.isInteger((i + 1) / 6))) {
            if (!!apiPrimes.prime(i)) {
                count += 1;
                primes.push(i);
            };
        }
    }
    return { count: primes.length, primes: primes };
}

// ERROR
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
function fastOptimized(start, end) {
    let primes = [];
    if (start > end) { throw new Error("Start cannot be greater than end. Start: ", start, ", end: ", end); }
    if (end < 10000) { primes = require("./10000.js"); }
    if (end < 100000) { primes = require("./100000.js"); };
    if (end < 1000000) { primes = require("./1000000.js") };
    if (!(end > 1000000)) {
        primes = primes.filter(i => { return (i >= start && i <= end) });
        return { count: primes.length, primes: primes };
    }
    return fast(start, end);
}

module.exports.fast = fast;
module.exports.fastOptimized = fastOptimized;
module.exports.alternates = alternateWays;
module.exports.alternatesOptimized = alternateWaysOptimized;
