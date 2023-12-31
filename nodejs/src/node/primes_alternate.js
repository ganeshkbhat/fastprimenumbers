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

module.exports.isPrimeConventionalWay = isPrimeConventionalWay;
module.exports.isPrimeSquarerootWay = isPrimeSquarerootWay;
module.exports.isPrimeSquarerootOptimised = isPrimeSquarerootOptimised;
module.exports.isPrimeSquarerootWayReturnValue = isPrimeSquarerootWayReturnValue;

module.exports.isPrimeConventionalWayPrecalculated = isPrimeConventionalWayPrecalculated;
module.exports.isPrimeSquarerootPrecalculated = isPrimeSquarerootPrecalculated;
