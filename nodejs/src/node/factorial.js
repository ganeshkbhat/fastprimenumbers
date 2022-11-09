/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


const rangejs = require("./range.js");
const countjs = require("./count.js");

function factorial(num) {
    let factorial = 1;
    if (num < 0) { return false; }
    else if (num === 0) { return false; }
    else {
        for (i = 1; i <= num; i++) {
            factorial *= i;
        }
    }
    return factorial;
}

function alternateWaysCount(start, count, functionName = "isPrimeSquarerootWayTwo") {
    return countjs.alternates(start, count, functionName).primes.map(factorial);
}

function alternateWaysCountOptimized(start, count, functionName = "isPrimeSquarerootWayTwo") {
    return countjs.alternatesOptimized(start, count, functionName).primes.map(factorial);
}

function alternateWaysRange(start, end, functionName = "isPrimeSquarerootWayTwo") {
    return rangejs.alternates(start, end, functionName).primes.map(factorial);
}

function alternateWaysRangeOptimized(start, end, functionName = "isPrimeSquarerootWayTwo") {
    return rangejs.alternatesOptimized(start, end, functionName).primes.map(factorial);
}

function fastCount(start, count) {
    return countjs.fast(start, count).primes.map(factorial);
}

function fastCountOptimized(start, count) {
    return countjs.fastOptimized(start, count).primes.map(factorial);
}

function fastRange(start, end) {
    return rangejs.fast(start, end).primes.map(factorial);
}

function fastRangeOptimized(start, end) {
    return rangejs.fastOptimized(start, end).primes.map(factorial);
}

module.exports.alternatesRange = alternateWaysRange;
module.exports.alternatesRangeOptimized = alternateWaysRangeOptimized;
module.exports.alternatesCount = alternateWaysCount;
module.exports.alternatesCountOptimized = alternateWaysCountOptimized;
module.exports.fastCount = fastCount;
module.exports.fastCountOptimized = fastCountOptimized;
module.exports.fastRange = fastRange;
module.exports.fastRangeOptimized = fastRangeOptimized;


// module.exports.fast = fast;
// module.exports.fastOptimized = fastOptimized;


// console.log(alternateWaysCountOptimized(10, 1000));
