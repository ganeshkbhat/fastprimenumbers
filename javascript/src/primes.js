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
        primes: prime,
        recursive: isPrimeConventionalWay,
        sqrootExpressive: isPrimeSquarerootWay,
        sqroot: isPrimeSquarerootWayTwo
    }
}
