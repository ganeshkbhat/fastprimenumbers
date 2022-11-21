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
 * @param {*} n
 * @return {*} 
 * 
 */
function isPrimeConventionalWay(n) {
    var count = 0;
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

function isPrimeConventionalWayReturnValue(n) {
    var count = 0;
    if (n <= 1) {
        return { number: n, value: false, count: count };
    }
    // Check from 2 to n-1
    // Max iterations 99998 for n == 100000 
    for (let i = 2; i < n; i++) {
        // Counting Iterations
        count += 1;
        if (n % i == 0) {
            // console.log("count: Prime Conventional way", count);
            return { number: n, value: false, count: count };
        }
    }
    // console.log("count: Prime Conventional way", count);
    return { number: n, value: true, count: count };
}

/**
 *
 *
 * @param {*} num
 * @return {*} 
 */
function isPrimeSquarerootWayReturnValue(num) {
    var count = 0;
    // if not is_number num return false
    if (num < 2) {
        // console.log("count: Prime Squareroot way", count);
        return { number: num, value: false, count: count };
    }

    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        // Counting Iterations
        count += 1;
        if (num % i === 0) {
            // console.log("count: Prime Squareroot way", count);
            return { number: num, value: false, count: count };
        }
    }
    // console.log("count: Prime Squareroot way", count);
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
const isPrimeSquarerootWay = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

const isPrimeSquarerootOptimised = num => {
    if ((num === 2 || num === 3 || num === 5 || num === 7)) {
        return true;
    }
    if (num === 1 || ((num > 7) && (num % 5 == 0 || num % 7 == 0 || num % 2 == 0 || num % 3 == 0))) {
        return false;
    }
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}


module.exports.isPrimeConventionalWay = isPrimeConventionalWay
module.exports.isPrimeSquarerootWay = isPrimeSquarerootWay
module.exports.isPrimeSquarerootOptimised = isPrimeSquarerootOptimised
module.exports.isPrimeSquarerootWayReturnValue = isPrimeSquarerootWayReturnValue
