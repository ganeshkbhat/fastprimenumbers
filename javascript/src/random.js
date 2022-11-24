/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(num) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


function primesRandom() {

    let rangejs;
    if (!!primesRange) {
        rangejs = primesRange();
    } else {
        console.log("Primes rangejs API files missing");
        throw new Error("Primes rangejs API files missing");
    }

    let random;
    if (!!primesRandom) {
        random = primesRandom();
    } else {
        console.log("Primes primesRandom API files missing");
        throw new Error("Primes primesRandom API files missing");
    }


    /**
     *
     *
     * @param {*} start
     * @param {*} end
     * @return {*} 
     */
    function getRandomInteger(start, end) {
        if (!start || !end) {
            return Math.floor(Math.random() * 1000);
        }
        return Math.floor(Math.random() * (end - start)) + start;
    }


    /**
     *
     *
     * @param {number} [digits=2]
     * @return {*} 
     */
    function randomPrime(digits = 2) {
        let rand = getRandomInteger(Math.pow(10, digits - 1), Math.pow(10, digits))
        return utils.nextPrime(rand);
    }


    /**
     *
     *
     * @param {number} [count=1]
     * @param {number} [digits=2]
     * @return {*} 
     */
    function generateRandomPrimes(count = 1, digits = 2) {
        let primesArray = [];
        for (let i = 0; i < count; i++) {
            primesArray.push(randomPrime(digits));
        }
        return primesArray;
    }


    /**
     *
     *
     * @param {*} start
     * @param {*} end
     * @return {*} 
     */
    function generatePrimesinRange(start, end) {
        return rangejs.fastOptimized(start, end);
    }


    /**
     *
     *
     * @param {*} start
     * @param {*} count
     * @return {*} 
     */
    function generatePrimesinCounts(start, count) {
        return countjs.fastOptimized(start, count);
    }

    return {
        get: getRandomInteger,
        prime: randomPrime,
        primesArray: generateRandomPrimes,
        range: generatePrimesinRange,
        counts: generatePrimesinCounts
    }
}
