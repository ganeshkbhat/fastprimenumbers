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

function alternateWaysCount(start, count, functionName = "isPrimeSquarerootWayTwo") {
    return countjs.alternates(start, count, functionName).primes.reduce((p, i) => { return p + i });
}

function alternateWaysCountOptimized(start, count, functionName = "isPrimeSquarerootWayTwo") {
    return countjs.alternatesOptimized(start, count, functionName).primes.reduce((p, i) => { return p + i });
}


function alternateWaysRange(start, end, functionName = "isPrimeSquarerootWayTwo") {
    return rangejs.alternates(start, end, functionName).primes.reduce((p, i) => { return p + i });
}

function alternateWaysRangeOptimized(start, end, functionName = "isPrimeSquarerootWayTwo") {
    return rangejs.alternatesOptimized(start, end, functionName).primes.reduce((p, i) => { return p + i });
}

function fastCount(start, count) {
    return countjs.alternates(start, count).primes.reduce((p, i) => { return p + i });
}

function fastCountOptimized(start, count) {
    return countjs.alternatesOptimized(start, count).primes.reduce((p, i) => { return p + i });
}

function fastRange(start, end) {
    return rangejs.alternates(start, end).primes.reduce((p, i) => { return p + i });
}

function fastRangeOptimized(start, end) {
    return rangejs.alternatesOptimized(start, end).primes.reduce((p, i) => { return p + i });
}

module.exports.alternatesRange = alternateWaysRange;
module.exports.alternatesRangeOptimized = alternateWaysRangeOptimized;
module.exports.alternatesCount = alternateWaysCount;
module.exports.alternatesCountOptimized = alternateWaysCountOptimized;
module.exports.fastCount = fastCount;
module.exports.fastCountOptimized = fastCountOptimized;
module.exports.fastRange = fastRange;
module.exports.fastRangeOptimized = fastRangeOptimized;
