/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


async function primesFactorial() {

    let apiPrimes = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/primes.ip.min.js");
    let { isPrimeConventionalWay, isPrimeSquarerootWay, isPrimeSquarerootWayTwo, prime } = apiPrimes();

    var rangejs = async function primesRange() {
        var range = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/range.min.js");
        const { alternateWays, alternateWaysOptimized, fast, fastOptimized } = range();
        return {
            alternateWays,
            alternateWaysOptimized,
            fast,
            fastOptimized
        }
    }();

    var countjs = async function primesCount() {
        var count = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/count.min.js");
        const { alternateWays, alternateWaysOptimized, fast, fastOptimized } = count();

        return {
            alternateWays,
            alternateWaysOptimized,
            fast,
            fastOptimized
        }
    }();

    function factorial(num) {
        num = BigInt(num);
        let factorial = BigInt(1);
        if (num < 0) { return false; }
        else if (num === 0) { return false; }
        else {
            for (i = 1; i <= num; i++) { factorial *= i; }
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

    function fast() { }

    function fastOptimized() { }

    return {
        factorial,
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