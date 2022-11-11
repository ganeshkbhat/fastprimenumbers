/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


async function primes() {

    var apiPrimes = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/primes.ip.min.js");
    var { isPrimeConventionalWay, isPrimeSquarerootWay, isPrimeSquarerootWayTwo, prime } = apiPrimes();

    var range = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/range.min.js");
    var count = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/count.min.js");
    var sum = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/sum.min.js");
    var factorial = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/factorial.min.js");

    return {
        prime,
        isPrimeConventionalWay,
        isPrimeSquarerootWay,
        isPrimeSquarerootWayTwo,
        range,
        count,
        factorial,
        sum
    }
}
