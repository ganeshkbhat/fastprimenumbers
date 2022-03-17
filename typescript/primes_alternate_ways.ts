/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
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
export function isPrimeConventionalWay(n: number): boolean {
    let count: number = 0;
    if (n <= 1) {
        return false;
    }
    // Check from 2 to n-1
    // Max iterations 99998 for n == 100000 
    for (let i: number = 2; i < n; i++) {
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
export function isPrimeSquarerootWay(num: number): boolean {
    let count: number = 0;
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
export const isPrimeSquarerootWayTwo = (num: number): boolean => {
    for (let i: number = 2, s: number = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}


