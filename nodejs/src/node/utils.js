/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/

const { prime, primePrecalculated } = require("./primes.js");
const countjs = require("./count.js");
const rangejs = require("./range.js");


/**
 * nextPrime
 * Get next prime (or from next prime above the non-prime number eg: 10 will have next prime as 11)
 *
 * @param {*} num
 * @return {*} 
 */
function nextPrime(num) {
    return (!!primePrecalculated(num)) ? countjs.fastOptimized(num, 2).primes[1] : countjs.fastOptimized(num, 2).primes[0];
}

/**
 * previousPrime
 * Get previous prime (or from previous prime above the non-prime number eg: 10 will have previous prime as 7)
 *
 * @param {*} num
 * @return {*} 
 */
function previousPrime(num) {
    var tmpPrime = num, count = 0;
    if (tmpPrime < 1000000) {
        let primes = [...require("./1000000.js")];
        if (!primePrecalculated(tmpPrime)) {
            tmpPrime = nextPrime(tmpPrime);
        }
        return primes[primes.indexOf(tmpPrime) - 1];
    }
    for (let i = tmpPrime; i >= 2; i--) {
        if (!!primePrecalculated(i)) {
            count++;
            if (count === 2) {
                return i;
            }
            continue;
        }
    }
}


/**
 * nextPrimeSets
 * Get the set of x (count) number of primes after the number y (num)
 *
 * @param {*} num
 * @param {number} [count=1]
 * @return {*} 
 */
function nextPrimeSets(num, count = 1) {
    if (!!primePrecalculated(num)) {
        let tmpPrimes = countjs.fastOptimized(num, count + 1).primes;
        return tmpPrimes.splice(1, tmpPrimes.length);
    }
    return countjs.fastOptimized(num, count).primes;
}

/**
 * previousPrimeSets
 * Get the set of x (count) number of primes before the number y (num)
 *
 * @param {*} num
 * @param {number} [count=1]
 * @return {*} 
 */
function previousPrimeSets(num, count = 1) {
    let tmpPrime = num, counter = 0, tmpArr = [];
    if (tmpPrime < 1000000) {
        let primes = [...require("./1000000.js")];
        if (!prime(tmpPrime)) {
            tmpPrime = nextPrime(tmpPrime);
        }
        let idx = primes.indexOf(tmpPrime);
        if ((idx + 1) <= count) {
            // console.log(num, idx, count, tmpPrime, ((idx + 1) - count), idx, primes.length)
            return primes.splice(0 + ((idx + 1) - count), idx);
        }
        return primes.splice((idx - count), idx);
    }
    for (let i = tmpPrime; i >= 2; i--) {
        if (!!primePrecalculated(i)) {
            counter++;
            tmpArr.push(i);
            if (counter === count) {
                return tmpArr;
            }
            continue;
        }
    }
}


module.exports.nextPrime = nextPrime;
module.exports.previousPrime = previousPrime;
module.exports.nextPrimeSets = nextPrimeSets;
module.exports.previousPrimeSets = previousPrimeSets;

