/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
 * Compare for performance:
 * 
 * prime:
 *      Weakness: More if statements (3) without loops,
 *      Weakness: More multiplications within loops (1 multiplication and 2 divisions for every loop even if exponentially reduced loops))
 *      Considerations: Convert divisions to mod for checks to reduce speed of calculations and related checks
 * 
 *      let fivebase = n / (5 + factorsix), sevenbase = n / (7 + factorsix);
 *      if (((fivebase > 1) && Number.isInteger(fivebase)) || ((sevenbase > 1) && (Number.isInteger(sevenbase)))) {}
 * 
 * 
 * Baillie Primality Tests:
 *      https://en.wikipedia.org/wiki/Baillie%E2%80%93PSW_primality_test (Weakness: )
 * 
 * (x.pow(num) - x)/num => Prime
 *      (Weakness: Space complexity)
 *      https://www.quantamagazine.org/teenager-solves-stubborn-riddle-about-prime-number-look-alikes-20221013/ 
 * 
*/


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
function primeOld(n) {
    var count = 0;
    if ((n === 2 || n === 3 || n === 5 || n === 7)) {
        // console.log("count: Prime Unconventional way", count);
        return true;
    }
    if (n === 1 || ((n > 7) && (n % 5 === 0 || n % 7 === 0 || n % 2 === 0 || n % 3 === 0))) {
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
 * RECOMMENDED WAY
 * for Calculation of Prime Numbers
 *
 * @param {*} n
 * @return {*} 
 */
function prime(n) {
    if ((n === 2 || n === 3 || n === 5 || n === 7)) {
        return true;
    }
    if (n === 1 || ((n > 7) && (n % 5 === 0 || n % 7 === 0 || n % 2 === 0 || n % 3 === 0))) {
        return false;
    }
    if ((((n - 1) % 6) === 0) || (((n + 1) % 6) === 0)) {
        for (let i = 1; i < n; i++) {
            let factorsix = (i * 6), fivebase = (5 + factorsix), sevenbase = (7 + factorsix);
            if (((n > fivebase) && ((n % fivebase) === 0)) || ((n > sevenbase) && ((n % sevenbase) === 0))) {
                return false;
            }
            if (factorsix > n) {
                break;
            }
        }
        return true;
    }
    return false;
}


/**
 * RECOMMENDED WAY
 * for Calculation of Prime Numbers (PRE-CALCULATED)
 *
 * @param {*} num
 * @return {*} 
 */
function primePrecalculated(num) {
    if (num < 1000000) {
        let primes = [...require("./1000000.js")];
        if (!!primes.includes(num)) {
            return true;
        }
        return false;
    }
    return prime(num);
}


/**
 * RECOMMENDED WAY with return value
 * for Calculation of Prime Numbers (PRE-CALCULATED)
 *
 * @param {*} n
 * @return {*} 
 */
function primeReturnValue(n) {
    var count = 0;
    if ((n === 2 || n === 3 || n === 5 || n === 7)) {
        return { number: n, value: true, count: count };
    }
    if (n === 1 || ((n > 7) && (n % 5 === 0 || n % 7 === 0 || n % 2 === 0 || n % 3 === 0))) {
        return { number: n, value: false, count: count };
    }
    if ((Number.isInteger(((n - 1) / 6))) || (Number.isInteger((n + 1) / 6))) {
        for (let i = 1; i < n; i++) {
            count += 1;
            let factorsix = (i * 6);
            let fivebase = n / (5 + factorsix), sevenbase = n / (7 + factorsix);
            if (((fivebase > 1) && Number.isInteger(fivebase)) || ((sevenbase > 1) && (Number.isInteger(sevenbase)))) {
                return { number: n, value: false, count: count };
            }
            if (factorsix > n) {
                break;
            }
        }
        return { number: n, value: true, count: count };
    }
    return { number: n, value: false, count: count };
}


module.exports.primeOld = primeOld;
module.exports.fastOld = primeOld;
module.exports.prime = prime;
module.exports.fast = prime;
module.exports.primeReturnValue = primeReturnValue;

module.exports.primePrecalculated = primePrecalculated;
