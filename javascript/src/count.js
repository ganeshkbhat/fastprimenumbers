/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


function primesCount() {
    let apiPrimes;
    if (!!primes) {
        apiPrimes = primes;
    } else {
        console.log("Primes API files missing");
        throw new Error("Primes API files missing");
    }
    var { recursive, sqrootOptimized, sqroot, prime } = apiPrimes();

    function alternateWays(start, count, functionName = "sqroot") {
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
            if (functionName === "recursive" || functionName === "conventional") {
                if (recursive(i)) {
                    primes.push(i);
                    counter++;
                };
            } else if (functionName === "sqrootOptimized") {
                if (sqrootOptimized(i)) {
                    primes.push(i);
                    counter++;
                };
            } else if (functionName === "sqroot") {
                if (sqroot(i)) {
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
        if (counter !== count && primes.length !== count) {
            throw new Error("[fast-prime]: count.js: alternateWaysOptimized: Prime numbers checks issue with the provided function: ");
        }
        return { count: primes.length, primes: primes };
    }

    async function alternateWaysOptimized(start, count, functionName = "sqroot") {
        let primes = [], counter = 0, i = start;
        try {
            if (start < 10000) {
                primes = stored;
            } else if (start < 100000) {
                primes = await fetch("https://unpkg.com/fast-prime-client@0.1.0/src/100000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/javascript/src/100000.json");
                primes = await JSON.parse(primes).data;
            } else if (start < 1000000) {
                primes = await fetch("https://unpkg.com/fast-prime-client@0.1.0/src/1000000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/javascript/src/1000000.json");
                primes = await JSON.parse(primes).data;
            };
            if (!(start > 1000000) && !!primes.length) {
                primes = primes.filter((i) => {
                    if (i >= start && counter < count) {
                        primes.push(i);
                        counter++;
                        return i;
                    }
                });
                if (counter !== count && primes.length !== count) {
                    throw new Error("[fast-prime]: count.js: alternateWaysOptimized: Prime numbers checks issue with the provided function: ");
                }
                return await { count: counter, primes: primes };
            }
        } catch (e) {
            console.log("[fast-prime]: count.js: There was an error trying to fetch ", e.toString());
        }

        return alternateWays(start, count, functionName);
    }

    function fast(start, count) {
        let primes = [], counter = 0, i = start;

        while (counter != count) {
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

    async function fastOptimized(start, count) {
        let primes = [], counter = 0, i = start;
        try {
            if (start < 10000) {
                primes = stored;
            } else if (start < 100000) {
                primes = await fetch("https://unpkg.com/fast-prime-client@0.1.0/src/100000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/javascript/src/100000.json");
                primes = await JSON.parse(primes).data;
            } else if (start < 1000000) {
                primes = await fetch("https://unpkg.com/fast-prime-client@0.1.0/src/1000000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/javascript/src/1000000.json");
                primes = await JSON.parse(primes).data;
            };
            if (!(start > 1000000) && !!primes.length) {
                primes = primes.filter((i) => {
                    if (i >= start && counter < count) {
                        primes.push(i);
                        counter++;
                        return i;
                    }
                });
                if (counter !== count && primes.length !== count) {
                    throw new Error("[fast-prime]: count.js: fastOptimized: Prime numbers checks issue with the provided function: ");
                }
                return { count: counter, primes: primes };
            }
        } catch (e) {
            console.log("[fast-prime]: count.js: There was an error trying to fetch ", e.toString());
        }
        return fast(start, count);
    }

    return {
        alternateWays,
        alternateWaysOptimized,
        fast,
        fastOptimized
    }
}
