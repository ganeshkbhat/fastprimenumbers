/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/

import stored from "./1000000";


/**
 * 
 * ALTERNATE WAY 
 * for Calculation of Prime Numbers
 *
 * @param {*} num
 * @return {*} 
 * 
 */
 export function isPrimeConventionalWay(num: number): boolean {
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

export function isPrimeConventionalWayPrecalculated(num: number): boolean {
    if (num < 1000000) {
        let primes = [...stored];
        if (!!primes.includes(num)) {
            return true;
        }
        return false;
    }
    return isPrimeConventionalWay(num);
}


export function isPrimeConventionalWayReturnValue(num: number): any {
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
export function isPrimeSquarerootWayReturnValue(num: number): any {
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
export function isPrimeSquarerootWay(num: number): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

export function isPrimeSquarerootOptimised(num: number): boolean {
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

export function isPrimeSquarerootPrecalculated(num: number): boolean {
    if (num < 1000000) {
        let primes = [...stored];
        if (!!primes.includes(num)) {
            return true;
        }
        return false;
    }
    return isPrimeSquarerootOptimised(num);
}

