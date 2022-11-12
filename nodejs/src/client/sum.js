/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


async function primesSum() {

    let rangejs, countjs;
    if (!!primesRange) {
        rangejs = primesRange();
    } else {
        console.log("Primes Range API files missing");
        throw new Error("Primes Range API files missing");
    }

    if (!!primesCount) {
        countjs = primesCount();
    } else {
        console.log("Primes Count API files missing");
        throw new Error("Primes Count API files missing");
    }

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

    return {
        alternateWaysCount,
        alternateWaysCountOptimized,
        alternateWaysRange,
        alternateWaysRangeOptimized,
        fastCount,
        fastCountOptimized,
        fastRange,
        fastRangeOptimized
    }
}