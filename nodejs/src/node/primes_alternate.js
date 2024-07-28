/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Alternate ways for calculation of Prime Numbers
 * 
 * 
*/


/**
 * 
 * ALTERNATE WAY 
 * for Calculation of Prime Numbers
 *
 * @param {*} num
 * @return {*} 
 * 
 */
function isPrimeConventionalWay(num) {
    var count = 0;
    if (num <= 1) {
        return false;
    }
    // Check from 2 to num-1
    // Max iterations 99998 for num == 100000 
    for (let i = 2; i < num; i++) {
        // Counting Iterations
        count += 1;
        if (num % i == 0) {
            // console.log("count: Prime Conventional way", count);
            return false;
        }
    }
    // console.log("count: Prime Conventional way", count);
    return true;
}

function isPrimeConventionalWayPrecalculated(num) {
    if (num < 1000000) {
        let primes = [...require("./1000000.js")];
        if (!!primes.includes(num)) {
            return true;
        }
        return false;
    }
    return isPrimeConventionalWay(num);
}


function isPrimeConventionalWayReturnValue(num) {
    var count = 0;
    if (num <= 1) {
        return { number: num, value: false, count: count };
    }
    for (let i = 2; i < num; i++) {
        count += 1;
        if (num % i == 0) {
            return { number: num, value: false, count: count };
        }
    }
    return { number: num, value: true, count: count };
}

/**
 *
 *
 * @param {*} num
 * @return {*} 
 */
function isPrimeSquarerootWayReturnValue(num) {
    var count = 0;
    if (num < 2) {
        return { number: num, value: false, count: count };
    }

    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        count += 1;
        if (num % i === 0) {
            return { number: num, value: false, count: count };
        }
    }
    return { number: num, value: true, count: count };
}

/**
 *
 *
 * @param {*} num
 * @return {*} 
 */
function isPrimeAKSAlternate(num) {
    if (num % 2 === 0 || num % 3 === 0) {
        return true;
    }
    let i = 5;
    while (i * i <= num) {
        if ((num % i !== 0) || (num % (i + 2) !== 0)) {
            return false;
        }
        i += 6;
    }
    return true;
}

/**
 *
 *
 * @param {*} num
 * @return {*} 
 */
function isComposite(num) {
    if (num <= 1) {
        return true;
    }
    if (num <= 3) {
        return false;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return true;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return true;
        }
        i += 6;
    }
    return false;
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
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

/**
 *
 *
 * @param {*} num
 * @return {*} 
 */
function isPrimeSquarerootOptimised(num) {
    if ((num === 2 || num === 3 || num === 5 || num === 7)) {
        return true;
    }
    if (num === 1 || ((num > 7) && (num % 5 === 0 || num % 7 === 0 || num % 2 === 0 || num % 3 === 0))) {
        return false;
    }
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

/**
 *
 *
 * @param {*} num
 * @return {*} 
 */
function isPrimeSquarerootPrecalculated(num) {
    if (num < 1000000) {
        let primes = [...require("./1000000.js")];
        if (!!primes.includes(num)) {
            return true;
        }
        return false;
    }
    return isPrimeSquarerootOptimised(num);
}

/**
 *
 *
 * @param {*} num
 */
function isPrimeFermetWay(num) {
    if (num < 2) return false;
    if ((num === 2 || num === 3 || num === 5 || num === 7)) {
        return true;
    }
    if (num === 1 || ((num > 7) && (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0))) {
        return false;
    }
    if (Math.pow(2, num - 1) % num === 1) return true;
    return false;
}

/**
 *
 *
 * @param {*} num
 */
function isPrimeFermetWayES(num) {
    if (num < 2) return false;
    if ((num === 2 || num === 3 || num === 5 || num === 7)) {
        return true;
    }
    if (num === 1 || ((num > 7) && (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0))) {
        return false;
    }
    if ((2**(num - 1)) % num === 1) return true;
    return false;
}

/**
 *
 *
 * @param {*} num
 */
function isPrimeMixedWay(num) {
    
}

/**
 *
 *
 * @param {*} r (range)
 * @return {*} 
 */
function isPrimeFermetWayRange(r) {
    let primes = [2];
    for (let i = 1; i < r; i++) {
        if (isPrimeFermetWay(i)) {
            primes.push(i);
        }
    }
    return primes;
}

/**
 *
 *
 * @param {*} num
 */
function isPrimeFermetWayConfirmed(num) {
    if (!!isPrimeFermetWay(num)) {
        if (!!isComposite(num)) {
            return false;
        }
        return true;
    }
    return false;
}

module.exports.isPrimeConventionalWay = isPrimeConventionalWay;
module.exports.isPrimeSquarerootWay = isPrimeSquarerootWay;
module.exports.isPrimeSquarerootOptimised = isPrimeSquarerootOptimised;
module.exports.isPrimeSquarerootWayReturnValue = isPrimeSquarerootWayReturnValue;

module.exports.isPrimeConventionalWayPrecalculated = isPrimeConventionalWayPrecalculated;
module.exports.isPrimeSquarerootPrecalculated = isPrimeSquarerootPrecalculated;
