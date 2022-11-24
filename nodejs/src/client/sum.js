/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(num) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


function primesSum() {

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

    function alternateWaysCount(start, count, functionName = "sqroot") {
        return countjs.alternateWays(start, count, functionName)["primes"].reduce((p, i) => { return p + i }, 0);
    }

    async function alternateWaysCountOptimized(start, count, functionName = "sqroot") {
        let rs = await countjs.alternateWaysOptimized(start, count, functionName)["primes"].reduce((p, i) => { return p + i }, 0);
    }

    function alternateWaysRange(start, end, functionName = "sqroot") {
        return rangejs.alternateWays(start, end, functionName)["primes"].reduce((p, i) => { return p + i }, 0);
    }

    async function alternateWaysRangeOptimized(start, end, functionName = "sqroot") {
        return await rangejs.alternateWaysOptimized(start, end, functionName)["primes"].reduce((p, i) => { return p + i }, 0);
    }

    function fastCount(start, count) {
        return countjs.alternateWays(start, count)["primes"].reduce((p, i) => { return p + i }, 0);
    }

    async function fastCountOptimized(start, count) {
        return await countjs.alternateWaysOptimized(start, count)["primes"].reduce((p, i) => { return p + i }, 0);
    }

    function fastRange(start, end) {
        return rangejs.alternateWays(start, end)["primes"].reduce((p, i) => { return p + i }, 0);
    }

    async function fastRangeOptimized(start, end) {
        return await rangejs.alternateWaysOptimized(start, end)["primes"].reduce((p, i) => { return p + i }, 0);
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
