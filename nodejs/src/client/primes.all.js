/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


function primes() {

    /**
     * 
     * RECOMMENDED WAY
     * for Calculation of Prime Numbers
     * 
     * ** FASTEST ** Calculation checks for prime numbers **
     *
     * @param {*} n
     * @return {*} 
     * 
     */
    function prime(n) {
        let count = 0;
        if ((n === 2 || n === 3 || n === 5 || n === 7)) {
            // console.log("count: Prime Unconventional way", count);
            return true;
        }
        if (n === 1 || ((n > 7) && (n % 5 == 0 || n % 7 == 0 || n % 2 == 0 || n % 3 == 0))) {
            // console.log("count: Prime Unconventional way", count);
            return false;
        }
        if ((Number.isInteger(((n - 1) / 6))) || (Number.isInteger((n + 1) / 6))) {
            for (let i = 1; i < n; i++) {
                // Counting Iterations
                count += 1;
                let factorsix = (i * 6);
                let fivebase = n / (5 + factorsix), sevenbase = n / (7 + factorsix);
                if (((fivebase > 1) && Number.isInteger(fivebase)) || ((sevenbase > 1) && (Number.isInteger(sevenbase)))) {
                    // console.log("count: Prime Unconventional way", count);
                    return false;
                }
                if (factorsix > n) {
                    // Max iterations 16666 for n == 100000 instead of 100000
                    break;
                }
            }
            // console.log("count: Prime Unconventional way", count);
            return true;
        }
        // console.log("count: Prime Unconventional way", count);
        return false;
    }

    /**
     * 
     * ALTERNATE WAY 
     * for Calculation of Prime Numbers
     *
     * @param {*} n
     * @return {*} 
     * 
     */
    function isPrimeConventionalWay(n) {
        let count = 0;
        if (n <= 1) {
            return false;
        }
        // Check from 2 to n-1
        // Max iterations 99998 for n == 100000 
        for (let i = 2; i < n; i++) {
            // Counting Iterations
            count += 1;
            if (n % i == 0) {
                // console.log("count: Prime Conventional way", count);
                return false;
            }
        }
        // console.log("count: Prime Conventional way", count);
        return true;
    }

    /**
     * 
     * ALTERNATE WAY 
     * for Calculation of Prime Numbers
     *
     * @param {*} num
     * @return {*} 
     * 
     */
    function isPrimeSquarerootWay(num) {
        let count = 0;
        // if not is_number num return false
        if (num < 2) {
            // console.log("count: Prime Squareroot way", count);
            return false;
        }

        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            // Counting Iterations
            count += 1;
            if (num % i === 0) {
                // console.log("count: Prime Squareroot way", count);
                return false;
            }
        }
        // console.log("count: Prime Squareroot way", count);
        return true;
    }

    /**
     * 
     * ALTERNATE WAY 
     * for Calculation of Prime Numbers
     *
     * @param {*} num
     * @return {*} 
     * 
     */
    const isPrimeSquarerootWayTwo = num => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    return {
        fast: prime,
        prime: prime,
        recursive: isPrimeConventionalWay,
        sqrootExpressive: isPrimeSquarerootWay,
        sqroot: isPrimeSquarerootWayTwo
    }
}

function primesCount() {
    let apiPrimes;
    if (!!primes) {
        apiPrimes = primes;
    } else {
        console.log("Primes API files missing");
        throw new Error("Primes API files missing");
    }
    var { recursive, sqrootExpressive, sqroot, prime } = apiPrimes();

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
            } else if (functionName === "sqrootExpressive") {
                if (sqrootExpressive(i)) {
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
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/10000.json");
                // https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/10000.json
                // primes = (await (fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/10000.json")).body);
                primes = await JSON.parse(primes).data;
            }
            if (start < 100000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/100000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/100000.json");
                primes = await JSON.parse(primes).data;
            };
            if (start < 1000000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/1000000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/1000000.json");
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
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/10000.json");
                // primes = (await (fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/10000.json")).body);
                primes = await JSON.parse(primes).data;
            }
            if (start < 100000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/100000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/100000.json");
                primes = await JSON.parse(primes).data;
            };
            if (start < 1000000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/1000000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/1000000.json");
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

function primesRange() {

    let apiPrimes;
    if (!!primes) {
        apiPrimes = primes;
    } else {
        console.log("Primes API files missing");
        throw new Error("Primes API files missing");
    }
    let { recursive, sqrootExpressive, sqroot, prime } = apiPrimes();

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
            } else if (functionName === "sqrootExpressive") {
                if (sqrootExpressive(i)) {
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
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/10000.json");
                // https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/10000.json
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/10000.json");
                primes = await JSON.parse(primes);
            }
            if (start < 100000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/100000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/100000.json");
                primes = await JSON.parse(primes);
            };
            if (start < 1000000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/1000000.json");
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
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/10000.json");
                // https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/10000.json
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/10000.json");
                primes = await JSON.parse(primes);
            }
            if (start < 100000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/100000.json");
                // primes = await fetch("https://raw.githubusercontent.com/ganeshkbhat/fastprimenumbers/main/nodejs/src/client/100000.json");
                primes = await JSON.parse(primes);
            };
            if (start < 1000000) {
                primes = await fetch("https://unpkg.com/fast-prime@0.0.63/src/client/1000000.json");
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

function primesFactorial() {

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

    function factorial(num) {
        num = BigInt(num);
        let factorial = BigInt(1);
        if (num < 0) { return false; }
        else if (num === 0) { return false; }
        else {
            for (let i = BigInt(1); i <= num; i++) { factorial *= i; }
        }
        return factorial;
    }

    function alternateWaysCount(start, count, functionName = "sqroot") {
        return countjs.alternateWays(start, count, functionName).primes.map(factorial);
    }

    async function alternateWaysCountOptimized(start, count, functionName = "sqroot") {
        return await countjs.alternateWaysOptimized(start, count, functionName).primes.map(factorial);
    }

    function alternateWaysRange(start, end, functionName = "sqroot") {
        return rangejs.alternateWays(start, end, functionName).primes.map(factorial);
    }

    async function alternateWaysRangeOptimized(start, end, functionName = "sqroot") {
        return await rangejs.alternateWaysOptimized(start, end, functionName).primes.map(factorial);
    }

    function fastCount(start, count) {
        return countjs.fast(start, count).primes.map(factorial);
    }

    async function fastCountOptimized(start, count) {
        return await countjs.fastOptimized(start, count).primes.map(factorial);
    }

    function fastRange(start, end) {
        return rangejs.fast(start, end).primes.map(factorial);
    }

    async function fastRangeOptimized(start, end) {
        return await rangejs.fastOptimized(start, end).primes.map(factorial);
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

