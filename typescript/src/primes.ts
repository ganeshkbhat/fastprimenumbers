/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(num) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/

import stored from "./1000000";


/**
 * 
 * RECOMMENDED WAY
 * for Calculation of Prime Numbers
 * 
 * ** FASTEST ** Calculation checks for prime numbers **
 *
 * @param {*} num
 * @return {*} 
 * 
 */
 export function primeOld(num: number): boolean {
    var count = 0;
    if ((num === 2 || num === 3 || num === 5 || num === 7)) {
        // console.log("count: Prime Unconventional way", count);
        return true;
    }
    if (num === 1 || ((num > 7) && (num % 5 == 0 || num % 7 == 0 || num % 2 == 0 || num % 3 == 0))) {
        // console.log("count: Prime Unconventional way", count);
        return false;
    }
    if ((Number.isInteger(((num - 1) / 6))) || (Number.isInteger((num + 1) / 6))) {
        for (let i = 1; i < num; i++) {
            // Counting Iterations
            count += 1;
            let factorsix = (i * 6);
            let fivebase = num / (5 + factorsix), sevenbase = num / (7 + factorsix);
            if (((fivebase > 1) && Number.isInteger(fivebase)) || ((sevenbase > 1) && (Number.isInteger(sevenbase)))) {
                // console.log("count: Prime Unconventional way", count);
                return false;
            }
            if (factorsix > num) {
                // Max iterations 16666 for num == 100000 instead of 100000
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
 * @param {*} num
 * @return {*} 
 */
export function prime(num: number): boolean {
    if ((num === 2 || num === 3 || num === 5 || num === 7)) {
        return true;
    }
    if (num === 1 || ((num > 7) && (num % 5 == 0 || num % 7 == 0 || num % 2 == 0 || num % 3 == 0))) {
        return false;
    }
    if ((((num - 1) % 6) === 0) || (((num + 1) % 6) === 0)) {
        for (let i = 1; i < num; i++) {
            let factorsix = (i * 6), fivebase = (5 + factorsix), sevenbase = (7 + factorsix);
            if (((num > fivebase) && ((num % fivebase) === 0)) || ((num > sevenbase) && ((num % sevenbase) === 0))) {
                return false;
            }
            if (factorsix > num) {
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
export function primePrecalculated(num: number): boolean {
    if (num < 1000000) {
        let primes = [...stored];
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
 * @param {*} num
 * @return {*} 
 */
export function primeReturnValue(num: number): any {
    var count = 0;
    if ((num === 2 || num === 3 || num === 5 || num === 7)) {
        return { number: num, value: true, count: count };
    }
    if (num === 1 || ((num > 7) && (num % 5 == 0 || num % 7 == 0 || num % 2 == 0 || num % 3 == 0))) {
        return { number: num, value: false, count: count };
    }
    if ((Number.isInteger(((num - 1) / 6))) || (Number.isInteger((num + 1) / 6))) {
        for (let i = 1; i < num; i++) {
            count += 1;
            let factorsix = (i * 6);
            let fivebase = num / (5 + factorsix), sevenbase = num / (7 + factorsix);
            if (((fivebase > 1) && Number.isInteger(fivebase)) || ((sevenbase > 1) && (Number.isInteger(sevenbase)))) {
                return { number: num, value: false, count: count };
            }
            if (factorsix > num) {
                break;
            }
        }
        return { number: num, value: true, count: count };
    }
    return { number: num, value: false, count: count };
}


