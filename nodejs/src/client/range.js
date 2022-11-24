/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(num) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


function primesRange() {

    let apiPrimes;
    if (!!primes) {
        apiPrimes = primes;
    } else {
        console.log("Primes API files missing");
        throw new Error("Primes API files missing");
    }

    let { recursive, sqrootOptimized, sqroot, prime } = apiPrimes();

    function alternateWays(start, end, functionName = "sqroot") {
        let primes = [];
        for (let i = start; i <= end; i++) {
            if ((i === 2 || i === 3 || i === 5 || i === 7)) {
                primes.push(i);
                continue;
            }
            if (i === 1 || ((i > 7) && (i % 5 == 0 || i % 7 == 0 || i % 2 == 0 || i % 3 == 0))) {
                continue;
            }
            if (functionName === "recursive" || functionName === "conventional") {
                if (recursive(i)) {
                    primes.push(i);
                };
            } else if (functionName === "sqrootOptimized") {
                if (sqrootOptimized(i)) {
                    primes.push(i);
                };
            } else if (functionName === "sqroot") {
                if (sqroot(i)) {
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

    async function alternateWaysOptimized(start, end, functionName = "sqroot") {
        let primes = [];
        if (start > end) { throw new Error("Start cannot be greater than end. Start: ", start, ", end: ", end); }
        try {
            if (start < 10000) {
                primes = stored;
            } else if (start < 100000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.1.0/src/client/100000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/100000.json");
                primes = await JSON.parse(primes);
            } else if (start < 1000000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.1.0/src/client/1000000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/1000000.json");
                primes = await JSON.parse(primes);
            };

            if (!(end > 1000000) && !!primes.length) {
                primes = primes.filter(i => { return (i > start && i < end) });
                return { count: primes.length, primes: primes };
            }
        } catch (e) {
            console.log("[fast-prime]: range.js: alternateWaysOptimized: There was an error trying to fetch ", e.toString());
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
        try {
            if (start < 10000) {
                primes = stored;
            } else if (start < 100000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.1.0/src/client/100000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/100000.json");
                primes = await JSON.parse(primes);
            } else if (start < 1000000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.1.0/src/client/1000000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/1000000.json");
                primes = await JSON.parse(primes);
            };

            if (!(end > 1000000) && !!primes.length) {
                primes = primes.filter(i => { return (i > start && i < end) });
                return { count: primes.length, primes: primes };
            }
        } catch (e) {
            console.log("[fast-prime]: range.js: fastOptimized: There was an error trying to fetch ", e.toString());
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
