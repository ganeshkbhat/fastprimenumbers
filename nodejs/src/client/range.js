/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/

async function primesRange() {

    let apiPrimes = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/primes.ip.min.js");
    let { isPrimeConventionalWay, isPrimeSquarerootWay, isPrimeSquarerootWayTwo, prime } = apiPrimes();

    function alternateWays(start, end, functionName = "isPrimeSquarerootWayTwo") {
        let primes = [];
        for (let i = start; i < end; i++) {
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

    async function alternateWaysOptimized(start, end, functionName = "isPrimeSquarerootWayTwo") {
        let primes = [];
        if (start > end) { throw new Error("Start cannot be greater than end. Start: ", start, ", end: ", end); }

        if (start < 10000) { primes = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/10000.json") }
        if (start < 100000) { primes = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/100000.json") };
        if (start < 1000000) { primes = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/1000000.json") };

        if (!(end > 1000000)) {
            primes = primes.filter(i => { return (i > start && i < end) });
            return { count: primes.length, primes: primes };
        }
        return alternateWays(start, end, functionName);
    }

    function fast(start, end) {
        let primes = [], count = 0;
        for (let i = start; i <= end; i++) {
            if ((i === 2 || i === 3 || i === 5 || i === 7)) {
                count += 1;
                primes.push(i);
                continue;
            }
            if (i === 1 || ((i > 7) && (i % 5 == 0 || i % 7 == 0 || i % 2 == 0 || i % 3 == 0))) {
                continue;
            }
            if ((Number.isInteger(((i - 1) / 6))) || (Number.isInteger((i + 1) / 6))) {
                if (!!prime(i)) {
                    count += 1;
                    primes.push(i);
                };
            }
        }
        return { count: primes.length, primes: primes };
    }

    async function fastOptimized(start, end) {
        let primes = [];
        if (start > end) { throw new Error("Start cannot be greater than end. Start: ", start, ", end: ", end); }

        if (start < 10000) { primes = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/10000.json") }
        if (start < 100000) { primes = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/100000.json") };
        if (start < 1000000) { primes = await fetch("https://unpkg.com/fast-prime-client@0.0.51/src/1000000.json") };

        if (!(end > 1000000)) {
            primes = primes.filter(i => { return (i > start && i < end) });
            return { count: primes.length, primes: primes };
        }
        return fast(start, end);
    }

    return {
        alternateWays,
        alternateWaysOptimized,
        fast,
        fastOptimized
    };
}
